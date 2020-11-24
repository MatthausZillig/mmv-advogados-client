import * as S from './styles'
import Button from 'components/Button'

export type ImagesProps = {
  img: string
  imgLink: string
  imgLabel: string
  title: string
  subtitle: string
}

export type BannerGridProps = {
  items: ImagesProps[]
}

const BannerGrid = ({ items }: BannerGridProps) => (
  <S.Wrapper>
    <S.Image src={items[0].img} role="img" aria-label={items[0].title}>
      <S.Caption>
        <S.Title>{items[0].title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: items[0].subtitle }} />
        <Button as="a" href={items[0].imgLink} size="large">
          {items[0].imgLabel}
        </Button>
      </S.Caption>
    </S.Image>

    <S.Image2 src={items[1].img} role="img" aria-label={items[1].title}>
      <S.Caption>
        <S.Title>{items[1].title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: items[1].subtitle }} />
        <Button as="a" href={items[1].imgLink} size="large">
          {items[1].imgLabel}
        </Button>
      </S.Caption>
    </S.Image2>

    <S.Image3 src={items[2].img} role="img" aria-label={items[2].title}>
      <S.Caption>
        <S.Title>{items[2].title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: items[2].subtitle }} />
        <Button as="a" href={items[2].imgLink} size="large">
          {items[2].imgLabel}
        </Button>
      </S.Caption>
    </S.Image3>

    <S.Image4 src={items[3].img} role="img" aria-label={items[3].title}>
      <S.Caption>
        <S.Title>{items[3].title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: items[3].subtitle }} />
        <Button as="a" href={items[3].imgLink} size="large">
          {items[3].imgLabel}
        </Button>
      </S.Caption>
    </S.Image4>

    <S.Image5 src={items[4].img} role="img" aria-label={items[4].title}>
      <S.Caption>
        <S.Title>{items[4].title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: items[4].subtitle }} />
        <Button as="a" href={items[4].imgLink} size="large">
          {items[4].imgLabel}
        </Button>
      </S.Caption>
    </S.Image5>

    <S.Image6 src={items[5].img} role="img" aria-label={items[5].title}>
      <S.Caption>
        <S.Title>{items[5].title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: items[5].subtitle }} />
        <Button as="a" href={items[5].imgLink} size="large">
          {items[5].imgLabel}
        </Button>
      </S.Caption>
    </S.Image6>
  </S.Wrapper>
)

export default BannerGrid
