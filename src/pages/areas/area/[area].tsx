/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from 'lib/prismic'
import { RichText } from 'prismic-reactjs'
import { Document } from 'prismic-javascript/types/documents'
import { ArrowBackOutline } from '@styled-icons/evaicons-outline/ArrowBackOutline'
import { GetServerSideProps } from 'next'
import { Container } from 'components/Container'
import Button from 'components/Button'
import Menu from 'components/Menu'
import Heading from 'components/Heading'
import Footer from 'components/Footer'

import * as S from 'templates/Areas/styles2'

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
          <Button
            as="a"
            href={`/areas`}
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

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { area } = context.params
  const areaOfAreas = await client().getByUID('area', area, {})

  return {
    props: {
      areaOfAreas: areaOfAreas
    }
  }
}
