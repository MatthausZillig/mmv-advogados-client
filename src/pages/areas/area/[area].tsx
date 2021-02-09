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
  areaOfAreas: Document
}

const Area = ({ areaOfAreas }: PropTypes) => {
  console.log(areaOfAreas)
  return (
    <section>
      <Menu />
      <S.SectionHeadings>
        <Container>
          <Heading lineBottom lineColor="heading" color="white">
            {RichText.render(areaOfAreas.data.title)}
          </Heading>
        </Container>
      </S.SectionHeadings>
      <Container>
        <S.SectionParagraph>
          <S.SectionImage>
            <img src={areaOfAreas.data.image.url} role="img" aria-label="img" />
          </S.SectionImage>
          {RichText.render(areaOfAreas.data.description)}
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

export default Area

export const getStaticPaths: GetStaticPaths = async () => {
  const areas = await client().query(
    Prismic.Predicates.at('document.type', 'areas')
  )

  const paths = areas.results.map((area) => {
    return {
      params: { area: area.uid }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { area } = context.params
  const areaOfAreas = await client().getByUID('area', area, {})

  return {
    props: {
      areaOfAreas: areaOfAreas
    }
  }
}
