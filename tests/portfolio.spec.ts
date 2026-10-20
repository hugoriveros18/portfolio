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
    await expect(page.locator('.hero-identity')).toContainText(
      locale === 'en' ? 'Fullstack Software Engineer' : 'Ingeniero de Software Fullstack',
    )
    const yuno = page.locator('.experience-company').filter({ has: page.locator('#yuno-heading') })
    await expect(yuno.getByRole('heading', { level: 4 })).toHaveText('Frontend Software Engineer')
    await expect(yuno.locator('.role-summary')).toContainText('Node.js')
    await expect(yuno).not.toContainText(/Express|Codex/)
    const itglobers = page.locator('.experience-company').filter({ has: page.locator('#itglobers-heading') })
    await expect(itglobers.getByRole('heading', { level: 4 })).toHaveText([
      'Mid-level Frontend Developer', 'Frontend Developer',
    ])
    await expect(itglobers).not.toContainText(/backend|Node\.js/i)
    await expect(page.locator('#contact')).toContainText('Fullstack Software Engineer')
    await expect(page.locator('#contact')).toContainText('Frontend Software Engineer')
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

  test(`${locale}: additional contributions support keyboard reading and localized deep links`, async ({
    page,
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text())
    })
    await page.goto(`/${locale}#contributions`)
    const disclosure = page.locator('.additional-contributions > details').first()
    const summary = disclosure.locator(':scope > summary')
    const story = page.locator('#contribution-vtex-subscriptions')
    await expect(disclosure).not.toHaveAttribute('open', '')
    await expect(story).not.toBeVisible()
    await summary.focus()
    await page.keyboard.press('Enter')
    await expect(story.getByRole('heading', { level: 3 })).toBeVisible()
    const detection = story.locator('details[id$="-cycle-detection"]')
    await detection.locator('summary').focus()
    await page.keyboard.press('Enter')
    await expect(detection.locator('.contribution-detail-copy')).toBeVisible()
    await expect(detection).toContainText(locale === 'en' ? 'cycle 0' : 'ciclo 0')
    await summary.focus()
    await page.keyboard.press('Enter')
    await expect(story).not.toBeVisible()

    await page.goto(`/${locale}#contribution-vtex-subscriptions`)
    await expect(disclosure).toHaveAttribute('open', '')
    await expect(story.getByRole('heading', { level: 3 })).toBeVisible()
    await page.getByRole('link', {
      name: locale === 'en' ? 'Leer en español' : 'Read in English',
    }).click()
    await expect(page).toHaveURL(new RegExp(`/${locale === 'en' ? 'es' : 'en'}#contribution-vtex-subscriptions$`))
    await expect(disclosure).toHaveAttribute('open', '')
    await expect(story.getByRole('heading', { level: 3 })).toBeVisible()
    const jumbo = page.locator('#contribution-jumbo-checkout-modularization')
    const jumboDisclosure = page.locator('.additional-contributions > details').filter({ has: jumbo })
    await expect(jumboDisclosure).not.toHaveAttribute('open', '')
    await jumboDisclosure.locator(':scope > summary').focus()
    await page.keyboard.press('Enter')
    await expect(jumbo.getByRole('heading', { level: 3 })).toBeVisible()
    await expect(disclosure).toHaveAttribute('open', '')
    await jumboDisclosure.locator(':scope > summary').focus()
    await page.keyboard.press('Enter')
    await expect(jumbo).not.toBeVisible()

    await page.goto(`/${locale}#contribution-jumbo-checkout-modularization`)
    await expect(jumboDisclosure).toHaveAttribute('open', '')
    await expect(disclosure).not.toHaveAttribute('open', '')
    await expect(jumbo.locator('.contribution-diagram')).toBeVisible()
    const migration = jumbo.locator('details[id$="-migration"]')
    await migration.locator('summary').focus()
    await page.keyboard.press('Enter')
    await expect(migration.locator('.contribution-detail-copy')).toBeVisible()
    await page.getByRole('link', {
      name: locale === 'en' ? 'Leer en español' : 'Read in English',
    }).click()
    await expect(page).toHaveURL(new RegExp(`/${locale === 'en' ? 'es' : 'en'}#contribution-jumbo-checkout-modularization$`))
    await expect(jumboDisclosure).toHaveAttribute('open', '')
    await expect(disclosure).not.toHaveAttribute('open', '')
    await expect(jumbo.getByRole('heading', { level: 3 })).toBeVisible()
    expect(errors).toEqual([])
  })

  test(`${locale}: the wallet contribution opens images in a modal and documentation in a new tab`, async ({
    page,
    context,
    request,
  }) => {
    await page.goto(`/${locale}#contribution-wallet-enhanced-experience`)
    const contribution = page.locator('#contribution-wallet-enhanced-experience')
    await expect(contribution).toBeVisible()
    await expect(contribution.getByRole('heading', {
      name: locale === 'en' ? 'Previous experience' : 'Experiencia anterior',
    })).toBeVisible()
    await expect(contribution.getByRole('heading', {
      name: locale === 'en' ? 'Enhanced experience' : 'Experiencia mejorada',
    })).toBeVisible()
    await expect(contribution.getByRole('heading', {
      name: locale === 'en' ? 'Installments as the next step' : 'Cuotas como siguiente etapa',
    })).toBeVisible()

    const images = contribution.locator('.gallery-images img')
    await expect(images).toHaveCount(3)
    for (const img of await images.all()) {
      await img.scrollIntoViewIfNeeded()
      await expect.poll(() => img.evaluate((node) => {
        const image = node as HTMLImageElement
        return image.complete && image.naturalWidth > 0
      })).toBe(true)
      await expect(img).toHaveAttribute('alt', /.+/)
    }
    const original = contribution.locator('.gallery-image-link').first()
    const src = await original.getAttribute('href')
    const imageResponse = await request.get(src!)
    expect(imageResponse.ok()).toBe(true)
    expect(imageResponse.headers()['content-type']).toContain('image/avif')
    const originalUrl = page.url()
    const tabCount = context.pages().length
    await original.click()
    const modal = page.getByRole('dialog')
    const close = modal.getByRole('button', {
      name: locale === 'en' ? 'Close image' : 'Cerrar imagen',
    })
    await expect(modal).toBeVisible()
    await expect(close).toBeFocused()
    await expect(modal.getByRole('img')).toHaveAttribute('src', src!)
    await expect.poll(() => modal.getByRole('img').evaluate((node) => (node as HTMLImageElement).naturalWidth)).toBeGreaterThan(0)
    expect(context.pages()).toHaveLength(tabCount)
    await expect(page).toHaveURL(originalUrl)
    expect(await page.locator('html').evaluate((node) => getComputedStyle(node).overflow)).toBe('hidden')
    await page.keyboard.press('Shift+Tab')
    await page.keyboard.press('Tab')
    await expect(close).toBeFocused()
    await page.keyboard.press('Escape')
    await expect(modal).toHaveCount(0)
    await expect(original).toBeFocused()
    expect(await page.locator('html').evaluate((node) => getComputedStyle(node).overflow)).not.toBe('hidden')

    await original.click()
    await close.click()
    await expect(modal).toHaveCount(0)
    await expect(original).toBeFocused()
    const secondImage = contribution.locator('.gallery-image-link').nth(1)
    await secondImage.click()
    await expect(modal).toBeVisible()
    const bounds = await modal.boundingBox()
    await page.mouse.click(2, bounds!.y + bounds!.height / 2)
    await expect(modal).toHaveCount(0)
    await expect(secondImage).toBeFocused()

    const technical = contribution.locator('details[id$="-payment-flow"]')
    await technical.locator('summary').focus()
    await page.keyboard.press('Enter')
    await expect(technical.locator('.contribution-diagram')).toBeVisible()
    await expect(technical).toContainText('OTT')
    await expect(technical).toContainText('VBase')
    const references = contribution.locator('.contribution-references a')
    await expect(references.first()).toHaveAttribute(
      'href',
      'https://docs.y.uno/docs/plugins/vtex/apple-pay-google-pay-enhanced-experience',
    )
    for (const reference of await references.all()) {
      await expect(reference).toHaveAttribute('target', '_blank')
      await expect(reference).toHaveAttribute('rel', 'noopener noreferrer')
      const href = await reference.getAttribute('href')
      await context.route(href!, (route) => route.fulfill({
        status: 200,
        contentType: 'text/html',
        body: '<title>Documentation preview</title>',
      }))
      const opening = context.waitForEvent('page')
      await reference.click()
      const documentation = await opening
      await documentation.waitForLoadState()
      await expect(documentation).toHaveURL(href!)
      await expect(page).toHaveURL(originalUrl)
      await documentation.close()
    }
    await page.getByRole('link', {
      name: locale === 'en' ? 'Leer en español' : 'Read in English',
    }).click()
    await expect(page).toHaveURL(new RegExp(`/${locale === 'en' ? 'es' : 'en'}#contribution-wallet-enhanced-experience$`))
    await expect(page.locator('#contribution-wallet-enhanced-experience')).toBeVisible()
  })

  test(`${locale}: metadata and sharing image match the selected language`, async ({
    page,
    request,
  }) => {
    await page.goto(`/${locale}`)
    await expect(page).toHaveTitle(
      locale === 'en'
        ? 'Hugo Riveros | Fullstack Software Engineer'
        : 'Hugo Riveros | Ingeniero de Software Fullstack',
    )
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://hugoriverosdev.vercel.app/${locale}`,
    )
    await expect(page.locator('link[hreflang="es"]')).toHaveAttribute(
      'href',
      'https://hugoriverosdev.vercel.app/es',
    )
    const title = locale === 'en'
      ? 'Hugo Riveros | Fullstack Software Engineer'
      : 'Hugo Riveros | Ingeniero de Software Fullstack'
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) {
      await expect(page.locator(selector)).toHaveAttribute('content', title)
    }
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) {
      await expect(page.locator(selector)).toHaveAttribute('content', /Fullstack/)
    }
    await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute('content', /Fullstack Software Engineer/)
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
    const paymentFlow = page.locator('#contribution-wallet-enhanced-experience-payment-flow')
    await paymentFlow.locator('summary').click()
    await expect(paymentFlow.locator('.contribution-diagram')).toBeVisible()
    await expect(page.locator('#contribution-wallet-enhanced-experience .gallery-images img')).toHaveCount(3)
    await page.goto(`/${locale}#contribution-vtex-subscriptions`)
    const subscription = page.locator('#contribution-vtex-subscriptions')
    await expect(subscription.getByRole('heading', { level: 3 })).toBeVisible()
    const cycles = subscription.locator('details[id$="-cycle-detection"]')
    await cycles.locator('summary').click()
    await expect(cycles.locator('.contribution-detail-copy')).toBeVisible()
    await expect(cycles).toContainText('subscription')
    await page.goto(`/${locale}#contribution-jumbo-checkout-modularization`)
    const jumbo = page.locator('#contribution-jumbo-checkout-modularization')
    await expect(jumbo.getByRole('heading', { level: 3 })).toBeVisible()
    await expect(jumbo.locator('.contribution-diagram')).toBeVisible()
    const migration = jumbo.locator('details[id$="-migration"]')
    await migration.locator('summary').click()
    await expect(migration.locator('.contribution-detail-copy')).toBeVisible()
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
