import Image from 'next/image'
import Button from 'components/Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  floatImage: string
  buttonLabel: 'Buy now'
  buttonLink: '/rdr2'
  alignment: 'right' | 'left'
}

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  buttonLabel,
  buttonLink,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper alignment={alignment} backgroundImage={backgroundImage}>
    <Image
      className="backgroundImage"
      src={backgroundImage}
      role="img"
      aria-label={title}
      unsized
    />
    {!!floatImage && (
      <S.FloatImage>
        <Image
          className="floatImage"
          src={floatImage}
          alt={title}
          role="img"
          unsized
        />
      </S.FloatImage>
    )}
    <S.Content>
      <S.ContentBox>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button size="small" as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.ContentBox>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
