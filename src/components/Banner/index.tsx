import Image from 'next/image'
import Fade from 'react-reveal/Fade'

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Button from 'components/Button'

import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  theClass: string
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = 'heading',
  ribbonSize = 'normal'
}: BannerProps) => {
  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <Image
        src={img}
        role="img"
        aria-label={title}
        layout="intrinsic"
        unsized
      />

      <S.Caption>
        <Fade left>
          <S.Title>{title}</S.Title>
          <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
          <Button as="a" href={buttonLink} size="large">
            {buttonLabel}
          </Button>
        </Fade>
      </S.Caption>
    </S.Wrapper>
  )
}
export default Banner
