import { Container } from 'components/Container'
import { Document } from 'prismic-javascript/types/documents'
import { RichText } from 'prismic-reactjs'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import BannerEscritorio from 'components/BannerEscritorio'
import QuemSomos from 'components/QuemSomos'
import Maps from 'components/Maps'
import CookiePolicy from 'components/CookiePolicy'

import * as S from './styles'

export type EscritorioTemplateProps = {
  banner: Document[]
}

const Escritorio = ({ banner }: EscritorioTemplateProps) => (
  <section>
    <Menu />
    <S.SectionBanner>
      <BannerEscritorio item={banner} />
    </S.SectionBanner>
    <S.SectionQuemSomos>
      <Container>
        <S.SectionHeadings>
          <Heading lineLeft lineColor="heading" color="black">
            {RichText.render(banner[0].data.title)}
          </Heading>
        </S.SectionHeadings>
        <QuemSomos banner={banner} />
      </Container>
    </S.SectionQuemSomos>
    <S.SectionMaps>
      <Container>
        <S.SectionHeadings>
          <Heading lineLeft lineColor="heading" color="white">
            Localização
          </Heading>
        </S.SectionHeadings>
        <Maps />
      </Container>
    </S.SectionMaps>
    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
    <CookiePolicy />
  </section>
)

export default Escritorio
