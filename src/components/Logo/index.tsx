import Image from 'next/image'

export type LogoProps = {
  width?: number
  height?: number
  quality?: number
}

const Logo = ({ quality = 100 }: LogoProps) => (
  <Image
    data-testid="logo"
    src="/img/logo.jpg"
    alt="Logo MMV Advogados associados"
    quality={quality}
    unsized
  />
)

export default Logo
