/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from 'lib/prismic'
import { RichText } from 'prismic-reactjs'
import Prismic from '@prismicio/client'
import { Document } from 'prismic-javascript/types/documents'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Heading from 'components/Heading'
import Footer from 'components/Footer'

import * as S from './styles'

interface PropTypes {
  articleOf: Document
}

const Article = ({ articleOf }: PropTypes) => {
  console.log(articleOf)
  return (
    <section>
      <Menu />
      <S.SectionHeadings>
        <Container>
          <Heading lineBottom lineColor="heading" color="white">
            {RichText.render(articleOf.data.title)}
          </Heading>
        </Container>
      </S.SectionHeadings>
      <Container>
        <S.SectionParagraph>
          <S.SectionImage>
            <img src={articleOf.data.image.url} role="img" aria-label="img" />
          </S.SectionImage>
          {RichText.render(articleOf.data.description)}
        </S.SectionParagraph>
      </Container>
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  )
}

export default Article

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await client().query(
    Prismic.Predicates.at('document.type', 'articles')
  )

  const paths = articles.results.map((article) => {
    return {
      params: { article: article.uid }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { article } = context.params
  const articleOf = await client().getByUID('area', article, {})
  console.log(context.params)
  return {
    props: {
      articleOf: articleOf
    }
  }
}
