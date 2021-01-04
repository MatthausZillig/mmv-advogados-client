import Image from 'next/image'
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
  items: SocioProps[]
}

const Socios = ({ items }: SociosProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <S.Socio key={item.name}>
        <S.Avatar>
          <Image
            src={item.img}
            role="img"
            aria-label="Rodrigo vedana"
            width="100"
            height="100"
            layout="responsive"
          />
        </S.Avatar>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left'
          }}
        >
          <S.Title>{item.name}</S.Title>
          <S.Text>{item.area}</S.Text>
          <S.Title>Formação Acadêmica</S.Title>
          <S.Text>{item.formation}</S.Text>
          <S.Title>Títulos Profissionais</S.Title>
          <S.Text>{item.titles}</S.Text>
          <S.Title>Idiomas</S.Title>
          <S.Text>{item.languages}</S.Text>
        </div>
      </S.Socio>
    ))}
  </S.Wrapper>
)

export default Socios
