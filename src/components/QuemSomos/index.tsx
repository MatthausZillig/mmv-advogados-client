import * as S from './styles'
import { Document } from 'prismic-javascript/types/documents'
import { RichText } from 'prismic-reactjs'

export type EscritorioTemplateProps = {
  banner: Document[]
}

const QuemSomos = ({ banner }: EscritorioTemplateProps) => (
  <S.Wrapper>
    <S.Column>
      <S.Text>{RichText.render(banner[0].data.description)}</S.Text>
    </S.Column>
  </S.Wrapper>
)

export default QuemSomos
