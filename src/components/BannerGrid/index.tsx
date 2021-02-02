import * as S from './styles'

import Button from 'components/Button'
import { RichText } from 'prismic-reactjs'
import { Document } from 'prismic-javascript/types/documents'
export type BannerGridProps = {
  items: Document[]
  classe?: boolean
}

function BannerGrid({ items, classe = false }: BannerGridProps) {
  return (
    <S.Wrapper classe={classe}>
      <S.Image>
        <img src={items[0].data.img.url} role="img" aria-label="img" />
        <S.Caption>
          <S.Title>{RichText.render(items[0].data.title)}</S.Title>
          <S.Subtitle>{items[0].data.subtitle}</S.Subtitle>
          <Button as="a" href={items[0].data.imglink} size="large">
            {items[0].data.imglabel}
          </Button>
        </S.Caption>
      </S.Image>

      <S.Image2>
        <img src={items[1].data.img.url} role="img" aria-label="img" />
        <S.Caption>
          <S.Title>{RichText.render(items[1].data.title)}</S.Title>
          <S.Subtitle>{items[1].data.subtitle}</S.Subtitle>

          <Button as="a" href={items[1].data.imglink} size="large">
            {items[1].data.imglabel}
          </Button>
        </S.Caption>
      </S.Image2>

      <S.Image3>
        <img src={items[2].data.img.url} role="img" aria-label="img" />
        <S.Caption>
          <S.Title>{RichText.render(items[2].data.title)}</S.Title>
          <S.Subtitle>{items[2].data.subtitle}</S.Subtitle>
          <Button as="a" href={items[2].data.imglink} size="large">
            {items[2].data.imglabel}
          </Button>
        </S.Caption>
      </S.Image3>

      <S.Image4>
        <img src={items[3].data.img.url} role="img" aria-label="img" />
        <S.Caption>
          <S.Title>{RichText.render(items[3].data.title)}</S.Title>
          <S.Subtitle>{items[3].data.subtitle}</S.Subtitle>
          <Button as="a" href={items[3].data.imglink} size="large">
            {items[3].data.imglabel}
          </Button>
        </S.Caption>
      </S.Image4>

      <S.Image5>
        <img src={items[4].data.img.url} role="img" aria-label="img" />
        <S.Caption>
          <S.Title>{RichText.render(items[4].data.title)}</S.Title>
          <S.Subtitle>{items[4].data.subtitle}</S.Subtitle>
          <Button as="a" href={items[4].data.imglink} size="large">
            {items[4].data.imglabel}
          </Button>
        </S.Caption>
      </S.Image5>
      <S.Image6 classe={classe}>
        <img src={items[5].data.img.url} role="img" aria-label="img" />
        <S.Caption>
          <S.Title>{RichText.render(items[5].data.title)}</S.Title>
          <S.Subtitle>{items[5].data.subtitle}</S.Subtitle>
          <Button as="a" href={items[5].data.imglink} size="large">
            {items[5].data.imglabel}
          </Button>
        </S.Caption>
      </S.Image6>
    </S.Wrapper>
  )
}

export default BannerGrid
