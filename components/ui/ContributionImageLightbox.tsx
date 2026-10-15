'use client'

import Image from 'next/image'
import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import type { ProfessionalContribution } from '@/content/contributions/types'
import { Icon } from '@/components/ui/Icon'

type GalleryImage = NonNullable<ProfessionalContribution['gallery']>['images'][number]

export function ContributionImageLightbox({
  image,
  closeLabel,
  children,
}: {
  image: GalleryImage
  closeLabel: string
  children: ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLAnchorElement>(null)
  const captionId = useId()

  useEffect(() => {
    if (!isOpen) return

    const dialog = dialogRef.current
    if (!dialog) return

    dialog.showModal()
    return () => dialog.close()
  }, [isOpen])

  return (
    <>
      <a
        ref={triggerRef}
        href={image.src}
        className="gallery-image-link"
        aria-haspopup="dialog"
        onClick={(event) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
          event.preventDefault()
          setIsOpen(true)
        }}
      >
        {children}
      </a>
      <dialog
        ref={dialogRef}
        className="gallery-lightbox"
        style={{ maxWidth: image.modalMaxWidth }}
        aria-labelledby={captionId}
        onClose={() => {
          setIsOpen(false)
          triggerRef.current?.focus({ preventScroll: true })
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return
          const bounds = event.currentTarget.getBoundingClientRect()
          if (
            event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom
          ) dialogRef.current?.close()
        }}
      >
        <figure>
          <figcaption className="lightbox-toolbar">
            <span id={captionId} className="lightbox-caption">{image.caption}</span>
            <button type="button" aria-label={closeLabel} onClick={() => dialogRef.current?.close()}>
              <Icon name="close" />
            </button>
          </figcaption>
          <div className="lightbox-image-frame">
            {isOpen ? (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                unoptimized
                className="lightbox-image"
              />
            ) : null}
          </div>
        </figure>
      </dialog>
    </>
  )
}
