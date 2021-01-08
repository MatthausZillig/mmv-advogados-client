import Image from 'next/image'

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Button from 'components/Button'

import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel?: string
  buttonLink?: string
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  type?: boolean
  theClass: string
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  type,
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
        width={type ? '1920px' : '1300px'}
        height="230px"
      />

      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        {buttonLink && buttonLabel && (
          <Button as="a" href={buttonLink} size="large">
            {buttonLabel}
          </Button>
        )}
      </S.Caption>
    </S.Wrapper>
  )
}
export default Banner
