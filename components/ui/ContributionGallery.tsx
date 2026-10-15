import Image from 'next/image'
import type { ProfessionalContribution } from '@/content/contributions/types'
import { Icon } from '@/components/ui/Icon'
import { ContributionImageLightbox } from '@/components/ui/ContributionImageLightbox'

type Gallery = NonNullable<ProfessionalContribution['gallery']>

export function ContributionGallery({
  gallery,
  imageAction,
  imageClose,
}: {
  gallery: Gallery
  imageAction: string
  imageClose: string
}) {
  if (gallery.images.length === 0) return null

  return (
    <div className="contribution-gallery">
      <h4>{gallery.title}</h4>
      {gallery.description ? <p className="gallery-description">{gallery.description}</p> : null}
      <div className="gallery-images">
        {gallery.images.map((item) => (
          <figure key={item.id}>
            <ContributionImageLightbox image={item} closeLabel={imageClose}>
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 45vw, 30vw"
              />
              <span className="gallery-image-action">
                {imageAction}
                <Icon name="expand" />
              </span>
            </ContributionImageLightbox>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
