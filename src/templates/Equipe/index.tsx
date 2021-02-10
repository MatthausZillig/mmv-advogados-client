import { Document } from 'prismic-javascript/types/documents'

import { Container } from 'components/Container'

import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Socios from 'components/Socios'
import Menu from 'components/Menu'
import CookiePolicy from 'components/CookiePolicy'
import Team from 'components/Team'

import * as S from './styles'

export type EquipeTemplateProps = {
  equipe: Document[]
}

const Home = ({ equipe }: EquipeTemplateProps) => {
  return (
    <section>
      <Menu />
      {equipe ? (
        <S.SectionTeam>
          <Container>
            <S.SectionHeadings>
              <Heading lineLeft lineColor="heading" color="black">
                Conheça nossos socios
              </Heading>
            </S.SectionHeadings>
            <Socios items={equipe} />
            <S.SectionHeadingsTwo>
              <Heading lineLeft lineColor="heading" color="black">
                Conheça nosso time
              </Heading>
            </S.SectionHeadingsTwo>
            <Team items={equipe} />
          </Container>
        </S.SectionTeam>
      ) : (
        <div>Nenhum conteúdo encontrado</div>
      )}
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
      <CookiePolicy />
    </section>
  )
}

export default Home
