import { test, expect } from '@playwright/test'
import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'

test('the default address opens English even for a Spanish browser', async ({
  page,
}) => {
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'es-CO,es;q=0.9' })
  await page.goto('/')
  await expect(page).toHaveURL(/\/en$/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Thoughtful interfaces.',
  )
})

for (const locale of ['en', 'es'] as const) {
  test(`${locale}: the professional profile and matching CV are available`, async ({
    page,
    request,
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text())
    })
    await page.goto(`/${locale}`)
    await expect(page.locator('html')).toHaveAttribute('lang', locale)
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      locale === 'en' ? 'Thoughtful interfaces.' : 'Interfaces con propósito.',
    )
    await expect(page.locator('#experience')).toContainText('Yuno')
    await expect(page.locator('#experience')).toContainText('ITGlobers')
    await expect(page.locator('#experience')).toContainText('Oct 2026')
    await expect(page.locator('#about')).toContainText('Yunex')
    await expect(page.locator('#about')).toContainText('IELTS')
    await expect(page.locator('.availability')).toHaveText(
      locale === 'en'
        ? 'Open to new opportunities'
        : 'Abierto a nuevas oportunidades',
    )
    await expect(page.locator('body')).not.toContainText('ESLAND')
    await expect(page.locator('body')).not.toContainText(
      "Currently I'm not open",
    )
    await expect(page.locator('.hero-copy')).not.toContainText(
      /React|Next\.js|TypeScript/,
    )
    const resume = page.locator('#contact a[download]')
    await expect(resume).toHaveAttribute(
      'href',
      `/files/hugo-riveros-cv-${locale}.pdf`,
    )
    const downloading = page.waitForEvent('download')
    await resume.click()
    expect((await downloading).suggestedFilename()).toBe(
      `hugo-riveros-cv-${locale}.pdf`,
    )
    const response = await request.get(`/files/hugo-riveros-cv-${locale}.pdf`)
    expect(response.ok()).toBeTruthy()
    expect(response.headers()['content-type']).toContain('application/pdf')
    const served = createHash('sha256')
      .update(await response.body())
      .digest('hex')
    const original = createHash('sha256')
      .update(await readFile(`public/files/hugo-riveros-cv-${locale}.pdf`))
      .digest('hex')
    expect(served).toBe(original)
    expect(errors).toEqual([])
  })

  test(`${locale}: contributions explain the complete solution and support deeper reading`, async ({
    page,
  }) => {
    await page.goto(`/${locale}#contribution-yunex`)
    const contribution = page.locator('#contribution-yunex')
    await expect(contribution).toBeVisible()
    await expect(contribution.locator('.capability-list > li')).toHaveCount(3)
    for (const name of locale === 'en'
      ? ['Answers and incident investigation', 'Automated knowledge maintenance', 'Post-deployment monitoring']
      : ['Consultas e investigación de incidentes', 'Mantenimiento automático del conocimiento', 'Monitoreo posterior al despliegue']) {
      await expect(contribution.getByRole('heading', { name })).toBeVisible()
    }
    await expect(contribution.locator('.contribution-impact')).toContainText(
      locale === 'en' ? 'Value for the team' : 'Valor para el equipo',
    )
    const incident = contribution.locator('details').last()
    await expect(incident.locator('.contribution-detail-copy')).not.toBeVisible()
    await incident.locator('summary').focus()
    await page.keyboard.press('Enter')
    await expect(incident.locator('.contribution-detail-copy')).toBeVisible()
    await expect(incident).toContainText('VTEX')
    await page.getByRole('link', {
      name: locale === 'en' ? 'Leer en español' : 'Read in English',
    }).click()
    await expect(page).toHaveURL(new RegExp(`/${locale === 'en' ? 'es' : 'en'}#contribution-yunex$`))
    await expect(page.locator('#contribution-yunex')).toBeVisible()
  })

  test(`${locale}: metadata and sharing image match the selected language`, async ({
    page,
    request,
  }) => {
    await page.goto(`/${locale}`)
    await expect(page).toHaveTitle(
      locale === 'en'
        ? 'Hugo Riveros | Frontend Software Engineer'
        : 'Hugo Riveros | Ingeniero de software frontend',
    )
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://hugoriverosdev.vercel.app/${locale}`,
    )
    await expect(page.locator('link[hreflang="es"]')).toHaveAttribute(
      'href',
      'https://hugoriverosdev.vercel.app/es',
    )
    const image = await page
      .locator('meta[property="og:image"]')
      .getAttribute('content')
    expect(image).toContain(`/${locale}/opengraph-image`)
    const imageUrl = new URL(image!)
    const response = await request.get(imageUrl.pathname + imageUrl.search)
    expect(response.ok()).toBeTruthy()
    expect(response.headers()['content-type']).toContain('image/png')
    expect((await response.body()).byteLength).toBeGreaterThan(1000)
  })
}

test('theme preference persists through reload and language changes, keeping the current section', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'light' })
  await page.goto('/en#about')
  await page.getByRole('button', { name: 'Switch to dark mode' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.getByRole('link', { name: 'Leer en español' }).click()
  await expect(page).toHaveURL(/\/es#about$/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'es')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await expect(page.locator('#contact a[download]')).toHaveAttribute(
    'href',
    '/files/hugo-riveros-cv-es.pdf',
  )
  await page.getByRole('button', { name: 'Cambiar a modo claro' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
})

test('system appearance works when persistent storage is unavailable', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', {
      get() {
        throw new DOMException('Storage unavailable', 'SecurityError')
      },
    })
  })
  await page.goto('/en')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.getByRole('button', { name: 'Switch to light mode' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
})

test('both languages remain readable and navigable without JavaScript', async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    baseURL,
    viewport: { width: 390, height: 844 },
  })
  const page = await context.newPage()
  for (const locale of ['en', 'es']) {
    await page.goto(`/${locale}`)
    await expect(page.locator('#hero-heading')).toBeVisible()
    await expect(page.locator('#experience-heading')).toBeVisible()
    await expect(page.locator('#contributions-heading')).toBeVisible()
    const incident = page.locator('#contribution-yunex-incident')
    await incident.locator('summary').click()
    await expect(incident.locator('.contribution-detail-copy')).toBeVisible()
    await expect(incident).toContainText('VTEX')
    await expect(page.locator('#about-heading')).toBeVisible()
    await expect(page.locator('#contact-heading')).toBeVisible()
    const menu = page.locator('.mobile-navigation')
    await menu.locator('summary').click()
    await expect(menu.locator('nav')).toBeVisible()
    await expect(page.locator('#contact a[download]')).toHaveAttribute(
      'href',
      `/files/hugo-riveros-cv-${locale}.pdf`,
    )
  }
  await context.close()
})

test('mobile navigation supports keyboard dismissal and closes after following a section', async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, 'This interaction belongs to the mobile navigation.')
  await page.goto('/es')
  const menu = page.locator('.mobile-navigation')
  const summary = menu.locator('summary')
  await summary.click()
  await expect(menu).toHaveAttribute('open', '')
  await page.keyboard.press('Escape')
  await expect(menu).not.toHaveAttribute('open', '')
  await expect(summary).toBeFocused()
  await summary.click()
  await menu.getByRole('link', { name: 'Experiencia' }).click()
  await expect(page).toHaveURL(/#experience$/)
  await expect(menu).not.toHaveAttribute('open', '')
})

test('keyboard access and reduced-motion preference are respected', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/en')
  await page.keyboard.press('Tab')
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
  expect(
    await page
      .locator('html')
      .evaluate((node) => getComputedStyle(node).scrollBehavior),
  ).toBe('auto')
  expect(
    await page
      .locator('.hero-copy')
      .evaluate((node) => getComputedStyle(node).animationName),
  ).toBe('none')
})

test('the layout fits small phones, tablets and desktops in both languages', async ({
  page,
}) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    for (const locale of ['en', 'es']) {
      await page.goto(`/${locale}`)
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      )
      expect(overflow, `${locale} at ${width}px`).toBe(false)
    }
  }
})

test('indexing resources and unsupported routes behave correctly', async ({
  request,
}) => {
  expect((await request.get('/robots.txt')).status()).toBe(200)
  const sitemap = await request.get('/sitemap.xml')
  expect(await sitemap.text()).toContain('https://hugoriverosdev.vercel.app/es')
  expect((await request.get('/icon.svg')).status()).toBe(200)
  expect((await request.get('/fr')).status()).toBe(404)
  expect((await request.get('/en/unknown-page')).status()).toBe(404)
})
