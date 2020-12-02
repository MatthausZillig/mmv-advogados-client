import Link from 'next/link'

import Heading from 'components/Heading'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="heading">
          contato
        </Heading>

        <a href="mailto:sac@wongames.com">atendimento@mmvadvogados.com.br</a>
        <a>+55 11 2359-9600</a>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="heading" lineBottom size="small">
          Redes sociais
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="heading" lineBottom size="small">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" lineColor="heading" lineBottom size="small">
          Localização
        </Heading>
        <span>Al. Joaquim Eugênio de Lima, 696, 12º andar</span>
        <span>Jardim Paulista - São Paulo/SP - CEP 01403-000</span>
      </S.Column>
    </S.Content>

    <S.Copyright>
      Monaco, Miranda & Vedana 2020 © All rights reserved.
    </S.Copyright>
  </S.Wrapper>
)

export default Footer
