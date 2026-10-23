export interface PortfolioImage {
  id: string
  src: string
  width: number
  height: number
  modalMaxWidth?: number
  alt: string
  caption: string
}

export interface PortfolioGallery {
  title: string
  description?: string
  images: PortfolioImage[]
}
