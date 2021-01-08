import * as S from './styles'
import Banner, { BannerProps } from 'components/Banner'

export type BannerEscProps = {
  item: BannerProps
}

const BannerEscritorio = ({ item }: BannerEscProps) => (
  <S.Wrapper>
    <Banner {...item} />
  </S.Wrapper>
)

export default BannerEscritorio
