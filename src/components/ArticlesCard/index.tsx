/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document } from 'prismic-javascript/types/documents'
import { RichText } from 'prismic-reactjs'
import * as S from './styles'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Chip from 'components/Chip'

export type ArticlesProps = {
  items: Document[]
}

const ArticlesCard = ({ items }: ArticlesProps) => {
  return (
    <S.Wrapper>
      {items.map((item, index) => (
        <S.ArticleCard key={index}>
          <S.ArticleImage>
            <span>
              <img src={item.data.img.url} role="img" height="400px" />
            </span>
          </S.ArticleImage>
          <S.ArticleInfo>
            <div className="jss78">
              <Heading>{RichText.render(item.data.title)}</Heading>
              <p className="descrip">
                {RichText.render(item.data.description)}
              </p>
              <div className="jss83">
                {item.data.chips.map((chip: any, index: any) => (
                  <Chip key={index}>{chip.chip}</Chip>
                ))}
              </div>
              <div></div>
              <div className="jss79">
                <div className="jss80">
                  <S.Subtitle> {item.data.subtitle}</S.Subtitle>
                </div>
                <Button
                  as="a"
                  href={`blog/artigo/${item.slugs[0]}`}
                  size="medium"
                >
                  Ler
                </Button>
              </div>
            </div>
          </S.ArticleInfo>
        </S.ArticleCard>
      ))}
    </S.Wrapper>
  )
}

export default ArticlesCard
