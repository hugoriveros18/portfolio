import Image from 'next/image'
import type { PortfolioGallery } from '@/content/media'
import { Icon } from '@/components/ui/Icon'
import { ImageLightbox } from '@/components/ui/ImageLightbox'

export function ImageGallery({
  gallery,
  imageAction,
  imageClose,
  headingLevel = 'h4',
}: {
  gallery: PortfolioGallery
  imageAction: string
  imageClose: string
  headingLevel?: 'h3' | 'h4'
}) {
  if (gallery.images.length === 0) return null
  const Heading = headingLevel

  return (
    <div className="contribution-gallery">
      <Heading>{gallery.title}</Heading>
      {gallery.description ? <p className="gallery-description">{gallery.description}</p> : null}
      <div className="gallery-images">
        {gallery.images.map((item) => (
          <figure key={item.id}>
            <ImageLightbox image={item} closeLabel={imageClose}>
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
            </ImageLightbox>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
