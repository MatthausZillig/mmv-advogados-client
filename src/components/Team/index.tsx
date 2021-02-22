import { Document } from 'prismic-javascript/types/documents'

import * as S from './styles'

export type TeamProps = {
  items: Document[]
}

const Team = ({ items }: TeamProps) => (
  <S.Wrapper>
    {items.map((item) => {
      if (!item.data.socio) {
        return (
          <S.Card key={item.data.name}>
            <div className="cardContainer">
              <S.Avatar>
                <img
                  src={item.data.img.url}
                  role="img"
                  aria-label="Rodrigo vedana"
                  width="120"
                  height="120"
                />
              </S.Avatar>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  alignItems: 'flex-start',
                  width: '220px',
                  textOverflow: 'ellipsis'
                }}
              >
                <S.Title>{item.data.name}</S.Title>
                <S.Text>{item.data.area}</S.Text>
              </div>
            </div>
          </S.Card>
        )
      }
    })}
  </S.Wrapper>
)

export default Team
