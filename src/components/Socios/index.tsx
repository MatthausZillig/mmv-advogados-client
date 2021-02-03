import { Document } from 'prismic-javascript/types/documents'
import { RichText } from 'prismic-reactjs'

import * as S from './styles'

export type SocioProps = {
  img: string
  name: string
  area: string
  formation: string
  titles: string
  languages: string
}

export type SociosProps = {
  items: Document[]
}

const Socios = ({ items }: SociosProps) => {
  console.log(items)
  return (
    <S.Wrapper>
      {items.map((item) => (
        <S.Socio key={item.data.name}>
          <S.Avatar>
            <img
              src={item.data.img.url}
              role="img"
              aria-label="Rodrigo vedana"
              width="120px"
              height="120px"
            />
          </S.Avatar>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'left'
            }}
          >
            <S.Title>{item.data.name}</S.Title>
            <S.Text>{item.data.area}</S.Text>
            <S.Title>Formação Acadêmica</S.Title>
            <S.Text>{RichText.render(item.data.formation)}</S.Text>
            <S.Title>Títulos Profissionais</S.Title>
            <S.Text>{RichText.render(item.data.titles)}</S.Text>
            <S.Title>Idiomas</S.Title>
            <S.Text>{item.data.languages}</S.Text>
          </div>
        </S.Socio>
      ))}
    </S.Wrapper>
  )
}

export default Socios
