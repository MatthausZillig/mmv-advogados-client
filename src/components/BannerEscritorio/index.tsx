import * as S from './styles'
import { Document } from 'prismic-javascript/types/documents'
import Banner from 'components/Banner'

export type BannerEscProps = {
  item: Document[]
  itemHome?: Document
  type?: string
}

const BannerEscritorio = ({ item }: BannerEscProps) => (
  <S.Wrapper>
    <Banner item={item} />
  </S.Wrapper>
)

export default BannerEscritorio
