import Ribbon from 'components/Ribbon'
import { BannerEscProps } from 'components/BannerEscritorio'
import { RichText } from 'prismic-reactjs'
import Button from 'components/Button'

import * as S from './styles'

const Banner = ({ item }: BannerEscProps) => {
  return (
    <S.Wrapper>
      {item[0] && item[0].data && item[0].data.ribbon && (
        <Ribbon color={item[0].data.ribbonColor} size={item[0].data.ribbonSize}>
          {item[0].data.ribbon}
        </Ribbon>
      )}

      <img
        src={item[0].data.img.url}
        role="img"
        width={item[0].data && item[0].data.type ? '1920px' : '1300px'}
        height="230px"
      />
      <S.Caption>
        <S.Title>{RichText.render(item[0].data.title)}</S.Title>
        <S.Subtitle
          dangerouslySetInnerHTML={{ __html: item[0].data.subtitle }}
        />
        {item[0].data.buttonLink && item[0].data.buttonLabel && (
          <Button as="a" href={item[0].data.buttonLink} size="large">
            {item[0].data.buttonLabel}
          </Button>
        )}
      </S.Caption>
    </S.Wrapper>
  )
}
export default Banner
