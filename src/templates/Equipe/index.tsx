import { SocioProps } from 'components/Socios'
import { PeapleProps } from 'components/Team'

import { Container } from 'components/Container'

import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Socios from 'components/Socios'
import Menu from 'components/Menu'
import CookiePolicy from 'components/CookiePolicy'
import Team from 'components/Team'

import * as S from './styles'

export type EquipeTemplateProps = {
  socios: SocioProps[]
  team: PeapleProps[]
}

const Home = ({ socios, team }: EquipeTemplateProps) => (
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
        <S.SectionHeadingsTwo>
          <Heading lineLeft lineColor="heading" color="black">
            Conheça nosso time
          </Heading>
        </S.SectionHeadingsTwo>

        <Team items={team} />
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