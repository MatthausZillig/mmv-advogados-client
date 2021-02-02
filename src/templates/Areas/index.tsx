import BannerGrid from 'components/BannerGrid'
import Menu from 'components/Menu'
import Heading from 'components/Heading'
import Footer from 'components/Footer'
import CookiePolicy from 'components/CookiePolicy'
import { Document } from 'prismic-javascript/types/documents'
import { Container } from 'components/Container'

import * as S from './styles'

export type AreaTemplateProps = {
  areas: Document[]
}

const Areas = ({ areas }: AreaTemplateProps) => {
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
          <BannerGrid items={areas} classe={true} />
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

export default Areas
