import Menu from 'components/Menu'
import ArticlesCard from 'components/ArticlesCard'
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
      <S.SectionArticles>
        <Container>
          <S.SectionHeadings>
            <Heading color="white" lineColor="heading" lineLeft>
              Artigos Recentes
            </Heading>
          </S.SectionHeadings>
          <ArticlesCard items={articles} />
        </Container>
      </S.SectionArticles>
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
