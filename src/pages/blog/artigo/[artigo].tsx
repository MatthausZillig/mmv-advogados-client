/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon
} from 'react-share'
import { ArrowBackOutline } from '@styled-icons/evaicons-outline/ArrowBackOutline'
import { client } from 'lib/prismic'
import { RichText } from 'prismic-reactjs'
import Prismic from '@prismicio/client'
import { Document } from 'prismic-javascript/types/documents'
import { GetStaticPaths, GetStaticProps } from 'next'
import Chip from 'components/Chip'
import { Container } from 'components/Container'
import Button from 'components/Button'
import Menu from 'components/Menu'
import Heading from 'components/Heading'
import Footer from 'components/Footer'

import * as S from 'templates/Articles/styles2'

interface PropTypes {
  articleOf: Document
}

const Article = ({ articleOf }: PropTypes) => {
  return (
    <section>
      <Menu />
      <S.SectionHeadings>
        <Container>
          <Heading lineBottom lineColor="heading" color="white">
            {RichText.render(articleOf.data.title)}
          </Heading>
          <Button
            as="a"
            href={`/blog`}
            size="medium"
            icon={<ArrowBackOutline />}
          >
            Voltar
          </Button>
        </Container>
      </S.SectionHeadings>
      <Container>
        <S.SectionParagraph>
          <S.SectionImage>
            <img src={articleOf.data.img.url} role="img" aria-label="img" />
            <S.SectionBottonImage>
              Compartilhe:{' '}
              <FacebookShareButton url="https://www.ylaw.ca/blog/parenting-covid19-courts-provincial-health-guidelines-bc/">
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <LinkedinShareButton url="https://www.ylaw.ca/blog/parenting-covid19-courts-provincial-health-guidelines-bc/">
                <LinkedinIcon size={32} round={true} />
              </LinkedinShareButton>
              <WhatsappShareButton url="https://www.ylaw.ca/blog/parenting-covid19-courts-provincial-health-guidelines-bc/">
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
            </S.SectionBottonImage>
          </S.SectionImage>
          <p>{articleOf.data.subtitle}</p>
          {RichText.render(articleOf.data.description)}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginTop: '20px'
            }}
          >
            {articleOf.data.chips.map((chip: any, index: any) => (
              <Chip key={index}>{chip.chip}</Chip>
            ))}
          </div>
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
      params: { artigo: article?.uid }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { artigo } = context.params
  const articleOf = await client().getByUID('articles', artigo, {})
  return {
    props: {
      articleOf: articleOf
    }
  }
}
