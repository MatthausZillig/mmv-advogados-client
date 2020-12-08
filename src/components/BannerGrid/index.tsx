import * as S from './styles'
import Image from 'next/image'
import Button from 'components/Button'
import { ImagesProps } from './ImagesTypes'

export type BannerGridProps = {
  items: ImagesProps[]
}

function BannerGrid({ items }: BannerGridProps) {
  return (
    <S.Wrapper>
      <S.Image>
        <Image
          src={items[0].img}
          role="img"
          aria-label={items[0].title}
          unsized
        />
        <S.Caption>
          <S.Title>{items[0].title}</S.Title>
          <S.Subtitle dangerouslySetInnerHTML={{ __html: items[0].subtitle }} />
          <Button as="a" href={items[0].imgLink} size="large">
            {items[0].imgLabel}
          </Button>
        </S.Caption>
      </S.Image>

      <S.Image2>
        <Image
          src={items[1].img}
          role="img"
          aria-label={items[1].title}
          unsized
        />
        <S.Caption>
          <S.Title>{items[1].title}</S.Title>
          <S.Subtitle dangerouslySetInnerHTML={{ __html: items[1].subtitle }} />
          <Button as="a" href={items[1].imgLink} size="large">
            {items[1].imgLabel}
          </Button>
        </S.Caption>
      </S.Image2>

      <S.Image3>
        <Image
          src={items[2].img}
          role="img"
          aria-label={items[2].title}
          unsized
        />
        <S.Caption>
          <S.Title>{items[2].title}</S.Title>
          <S.Subtitle dangerouslySetInnerHTML={{ __html: items[2].subtitle }} />
          <Button as="a" href={items[2].imgLink} size="large">
            {items[2].imgLabel}
          </Button>
        </S.Caption>
      </S.Image3>

      <S.Image4>
        <Image
          src={items[3].img}
          role="img"
          aria-label={items[3].title}
          unsized
        />
        <S.Caption>
          <S.Title>{items[3].title}</S.Title>
          <S.Subtitle dangerouslySetInnerHTML={{ __html: items[3].subtitle }} />
          <Button as="a" href={items[3].imgLink} size="large">
            {items[3].imgLabel}
          </Button>
        </S.Caption>
      </S.Image4>

      <S.Image5>
        <Image
          src={items[4].img}
          role="img"
          aria-label={items[4].title}
          unsized
        />
        <S.Caption>
          <S.Title>{items[4].title}</S.Title>
          <S.Subtitle dangerouslySetInnerHTML={{ __html: items[4].subtitle }} />
          <Button as="a" href={items[4].imgLink} size="large">
            {items[4].imgLabel}
          </Button>
        </S.Caption>
      </S.Image5>

      <S.Image6>
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
}

export default BannerGrid
