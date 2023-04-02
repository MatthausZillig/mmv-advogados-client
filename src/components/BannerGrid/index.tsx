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

  console.log('Ban', handleBannerOrder)
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
    </S.Wrapper>
  )
}

export default BannerGrid
