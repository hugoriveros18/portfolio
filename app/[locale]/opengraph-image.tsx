import { ImageResponse } from 'next/og'
import { notFound } from 'next/navigation'
import { getContent } from '@/content'
import { isLocale } from '@/lib/i18n'

export const alt = 'Hugo Riveros — Fullstack Software Engineer / Ingeniero de Software Fullstack'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const { hero } = getContent(locale)
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: '#FAF7F2',
          color: '#24211E',
          padding: '64px 76px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 34, fontWeight: 700 }}>
          hugo<span style={{ color: '#A43D27' }}>.</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 62,
            fontSize: 64,
            fontWeight: 600,
            letterSpacing: '-2px',
            lineHeight: 1.12,
          }}
        >
          <span>{hero.headline[0]}</span>
          <span style={{ color: '#A43D27' }}>{hero.headline[1]}</span>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 'auto',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #DED7CF',
            paddingTop: 24,
            fontSize: 22,
          }}
        >
          <span>Hugo Riveros / {hero.role}</span>
          <span style={{ color: '#A43D27', fontSize: 17 }}>
            {hero.availability}
          </span>
        </div>
      </div>
    ),
    size,
  )
}
