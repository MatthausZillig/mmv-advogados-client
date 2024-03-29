/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document } from 'prismic-javascript/types/documents'
import { RichText } from 'prismic-reactjs'
import * as S from './styles'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import Button from 'components/Button'
import Chip from 'components/Chip'

export type FeatureChips = {
  chip: string
}

export type FeaturesArticlesProps = {
  img: string
  title: string
  subtitle: string
  description: string
  chips: FeatureChips[]
}

export type FeatureProps = {
  items: Document[]
}

const FeaturesArticles = ({ items }: FeatureProps) => {
  if (!items) {
    return null
  }
  console.log(items)
  const firstTwoItens = items.map((item: any, index: any) => {
    return index < 2 && item
  })

  const filtered = firstTwoItens.filter((item: any) => {
    return item
  })

  return (
    <S.Wrapper>
      <S.FeatureTitle>
        <Heading lineLeft>Novos Artigos</Heading>
        <MediaMatch greaterThan="medium">
          <Button as="a" href="/blog" withBorder>
            Veja todos
          </Button>
        </MediaMatch>
      </S.FeatureTitle>
      <S.FeatureCard data-testid="card">
        {items &&
          filtered &&
          filtered.map((item, index) => (
            <S.FeatureBox key={index}>
              <div style={{ maxHeight: '300px' }}>
                <img
                  src={item.data.img.url}
                  role="img"
                  width="538px"
                  height="300px"
                />
              </div>
              <S.Card>
                <div style={{ display: 'flex' }}>
                  {item.data.chips.map((chip: any, index: any) => (
                    <Chip key={index}>{chip.chip}</Chip>
                  ))}
                </div>
                <h1>{RichText.render(item.data.title)}</h1>
                <S.Subtitle> {item.data.subtitle}</S.Subtitle>
                <p className="descrip">
                  {RichText.render(item.data.description)}
                </p>
              </S.Card>
            </S.FeatureBox>
          ))}
        <MediaMatch lessThan="medium">
          <Button as="a" href="/blog">
            Veja todos
          </Button>
        </MediaMatch>
      </S.FeatureCard>
    </S.Wrapper>
  )
}

export default FeaturesArticles
