import Image from 'next/image'
import * as S from './styles'

export type PeapleProps = {
  img: string
  name: string
  area: string
}

export type TeamProps = {
  items: PeapleProps[]
}

const Team = ({ items }: TeamProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <S.Card key={item.name}>
        <div className="cardContainer">
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
              justifyContent: 'space-evenly',
              width: '220px'
            }}
          >
            <S.Title>{item.name}</S.Title>
            <S.Text>{item.area}</S.Text>
          </div>
        </div>
      </S.Card>
    ))}
  </S.Wrapper>
)

export default Team
