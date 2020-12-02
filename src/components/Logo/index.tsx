import Image from 'next/image'

export type LogoProps = {
  width?: number
  height?: number
  quality?: number
  objectfit?: string
  layout: string
}

const Logo = ({
  objectfit = 'cover',
  quality = 100,
  layout = 'fill'
}: LogoProps) => (
  <Image
    data-testid="logo"
    src="/img/logo.jpg"
    alt="Logo MMV Advogados associados"
    objectfit={objectfit}
    quality={quality}
    layout={layout}
    unsized
  />
)

export default Logo
