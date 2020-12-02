import Image from 'next/image'
import * as S from './styles'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import Button from 'components/Button'
import Chip from 'components/Chip'

export type FeatureChips = {
  chip: string
}

export type FeaturesArticles = {
  img: string
  title: string
  subtitle: string
  description: string
  chips: FeatureChips[]
}

export type FeatureProps = {
  items: FeaturesArticles[]
}

const FeaturesArticles = ({ items }: FeatureProps) => (
  <S.Wrapper>
    <S.FeatureTitle>
      <Heading lineLeft>Novos Artigos</Heading>
      <Button withBorder>Veja todos</Button>
    </S.FeatureTitle>
    <S.FeatureCard data-testid="card">
      {items.map((item, index) => (
        <S.FeatureBox key={index}>
          <div style={{ maxHeight: '300px' }}>
            <Image
              src={item.img}
              role="img"
              aria-label={item.title}
              layout="intrinsic"
              unsized
            />
          </div>
          <S.Card>
            <div style={{ display: 'flex' }}>
              {item.chips.map((chip, index) => (
                <Chip key={index}>{chip}</Chip>
              ))}
            </div>
            <Heading>{item.title}</Heading>
            <S.Subtitle> {item.subtitle}</S.Subtitle>
            <p>{item.description}</p>
          </S.Card>
        </S.FeatureBox>
      ))}
      <MediaMatch lessThan="medium">
        <Button>Veja todos</Button>
      </MediaMatch>
    </S.FeatureCard>
  </S.Wrapper>
)

export default FeaturesArticles
