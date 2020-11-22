import * as S from './styles'

export type ImagesProps = {
  img: string
}

export type BannerGridProps = {
  items: ImagesProps[]
}

const BannerGrid = ({ items }: BannerGridProps) => (
  <S.Wrapper>
    <S.Image src={items[0].img} role="img" />
    <S.Image2 src={items[1].img} role="img" />
    <S.Image3 src={items[2].img} role="img" />
    <S.Image4 src={items[3].img} role="img" />
    <S.Image5 src={items[4].img} role="img" />
    <S.Image6 src={items[5].img} role="img" />
  </S.Wrapper>
)

export default BannerGrid
