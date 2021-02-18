import * as S from './styles'

import Button from 'components/Button'
import { RichText } from 'prismic-reactjs'
import { Document } from 'prismic-javascript/types/documents'
export type BannerGridProps = {
  items: Document[]
  classe?: boolean
}

function BannerGrid({ items, classe = false }: BannerGridProps) {
  const handleBannerOrder = items.sort(function (a, b) {
    return parseInt(a.data.order) - parseInt(b.data.order)
  })

  return (
    <S.Wrapper classe={classe}>
      <S.Image>
        <img
          src={handleBannerOrder[0].data.img.url}
          role="img"
          aria-label="img"
        />
        <S.Caption>
          <S.Title>{RichText.render(handleBannerOrder[0].data.title)}</S.Title>
          {/* <S.Subtitle>{handleBannerOrder[0].data.subtitle}</S.Subtitle> */}
          <Button as="a" href={handleBannerOrder[0].data.imglink} size="large">
            {handleBannerOrder[0].data.imglabel}
          </Button>
        </S.Caption>
      </S.Image>

      <S.Image2>
        <img
          src={handleBannerOrder[1].data.img.url}
          role="img"
          aria-label="img"
        />
        <S.Caption>
          <S.Title>{RichText.render(handleBannerOrder[1].data.title)}</S.Title>
          {/* <S.Subtitle>{handleBannerOrder[1].data.subtitle}</S.Subtitle> */}

          <Button as="a" href={handleBannerOrder[1].data.imglink} size="large">
            {handleBannerOrder[1].data.imglabel}
          </Button>
        </S.Caption>
      </S.Image2>

      <S.Image3>
        <img
          src={handleBannerOrder[2].data.img.url}
          role="img"
          aria-label="img"
        />
        <S.Caption>
          <S.Title>{RichText.render(handleBannerOrder[2].data.title)}</S.Title>
          {/* <S.Subtitle>{handleBannerOrder[2].data.subtitle}</S.Subtitle> */}
          <Button as="a" href={handleBannerOrder[2].data.imglink} size="large">
            {handleBannerOrder[2].data.imglabel}
          </Button>
        </S.Caption>
      </S.Image3>

      <S.Image4>
        <img
          src={handleBannerOrder[3].data.img.url}
          role="img"
          aria-label="img"
        />
        <S.Caption>
          <S.Title>{RichText.render(handleBannerOrder[3].data.title)}</S.Title>
          {/* <S.Subtitle>{handleBannerOrder[3].data.subtitle}</S.Subtitle> */}
          <Button as="a" href={handleBannerOrder[3].data.imglink} size="large">
            {handleBannerOrder[3].data.imglabel}
          </Button>
        </S.Caption>
      </S.Image4>

      <S.Image5>
        <img
          src={handleBannerOrder[4].data.img.url}
          role="img"
          aria-label="img"
        />
        <S.Caption>
          <S.Title>{RichText.render(handleBannerOrder[4].data.title)}</S.Title>
          {/* <S.Subtitle>{handleBannerOrder[4].data.subtitle}</S.Subtitle> */}
          <Button as="a" href={handleBannerOrder[4].data.imglink} size="large">
            {handleBannerOrder[4].data.imglabel}
          </Button>
        </S.Caption>
      </S.Image5>
      <S.Image6>
        <img
          src={handleBannerOrder[5].data.img.url}
          role="img"
          aria-label="img"
        />
        <S.Caption>
          <S.Title>{RichText.render(handleBannerOrder[5].data.title)}</S.Title>
          {/* <S.Subtitle>{handleBannerOrder[5].data.subtitle}</S.Subtitle> */}
          <Button as="a" href={handleBannerOrder[5].data.imglink} size="large">
            {handleBannerOrder[5].data.imglabel}
          </Button>
        </S.Caption>
      </S.Image6>
    </S.Wrapper>
  )
}

export default BannerGrid
