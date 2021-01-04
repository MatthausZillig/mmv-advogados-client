import { SocioProps } from 'components/Socios'

import { Container } from 'components/Container'

import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Socios from 'components/Socios'
import Menu from 'components/Menu'
import CookiePolicy from 'components/CookiePolicy'

import * as S from './styles'

export type EquipeTemplateProps = {
  socios: SocioProps[]
}

const Home = ({ socios }: EquipeTemplateProps) => (
  <section>
    <Menu />

    <S.SectionTeam>
      <Container>
        <S.SectionHeadings>
          <Heading lineLeft lineColor="heading" color="black">
            Conheça nossos socios
          </Heading>
        </S.SectionHeadings>
        <Socios items={socios} />
      </Container>
    </S.SectionTeam>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
    <CookiePolicy />
  </section>
)

export default Home
