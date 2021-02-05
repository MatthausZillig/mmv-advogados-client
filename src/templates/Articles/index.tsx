import Menu from 'components/Menu'
import FeaturesArticles from 'components/FeaturesArticles'
import Heading from 'components/Heading'
import Footer from 'components/Footer'
import CookiePolicy from 'components/CookiePolicy'
import { Document } from 'prismic-javascript/types/documents'
import { Container } from 'components/Container'

import * as S from './styles'

export type ArticlesTemplateProps = {
  articles: Document[]
}

const Articles = ({ articles }: ArticlesTemplateProps) => {
  return (
    <section>
      <Menu />
      <S.SectionBanner>
        <Container>
          <S.SectionHeadings>
            <Heading color="white" lineColor="heading" lineLeft>
              Areas de atuação
            </Heading>
          </S.SectionHeadings>
          <FeaturesArticles items={articles} />
        </Container>
      </S.SectionBanner>
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
      <CookiePolicy />
    </section>
  )
}

export default Articles
