import { Container } from 'components/Container'
import { BannerProps } from 'components/Banner'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import BannerEscritorio from 'components/BannerEscritorio'
import QuemSomos from 'components/QuemSomos'
import CookiePolicy from 'components/CookiePolicy'

import * as S from './styles'

export type EscritorioTemplateProps = {
  banner: BannerProps
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
            Quem Somos
          </Heading>
        </S.SectionHeadings>
        <QuemSomos />
      </Container>
    </S.SectionQuemSomos>
    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
    <CookiePolicy />
  </section>
)

export default Escritorio
