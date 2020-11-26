import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading lineLeft color="black">
        News
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft>Novos Artigos</Heading>
    </Container>

    <Container>
      <Heading lineLeft>O que oferecemos</Heading>
    </Container>

    <Footer />
  </section>
)

export default Home
