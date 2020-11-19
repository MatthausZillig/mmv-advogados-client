import Image from 'next/image'

export type LogoProps = {
  width?: number
  height?: number
}

const Logo = ({ width = 300, height = 61 }: LogoProps) => (
  <Image
    data-testid="logo"
    src="/img/logo.jpg"
    alt="Logo MMV Advogados associados"
    width={width}
    height={height}
  />
)

export default Logo
