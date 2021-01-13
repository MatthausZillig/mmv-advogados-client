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

        <a href="mailto:atendimento@mmvadvogados.com.br">
          atendimento@mmvadvogados.com.br
        </a>
        <a href="tel:+55-11-2359-9600">+55 11 2359-9600</a>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="heading" lineBottom size="small">
          Redes sociais
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/vedana.advogados/?igshid=3y0t00iyw1y2"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/monaco-miranda-vedana-&-caroni-reis/"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://www.facebook.com/MMVAdvogados"
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
          <Link href="/Escritorio">
            <a>Escritório</a>
          </Link>
          <Link href="/areas">
            <a>Áreas de atuação</a>
          </Link>
          <Link href="/Equipe">
            <a>Equipe</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
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
      <S.Baw>
        Developed by
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          viewBox="0 0 765.5 847.42"
        >
          <g>
            <polygon
              points="153.65 385.83 165.07 379.19 311.21 840.78 299.79 847.42 153.65 385.83"
              fill="#1f242b"
            />
            <polygon
              points="153.65 385.83 299.79 847.42 248.86 818.01 216.5 799.32 84.49 723.1 50.13 703.28 0 674.34 153.65 385.83"
              fill="#313336"
            />
          </g>
          <path
            d="M760.59,507.05q-24,18.23-57.77,30.15a232.91,232.91,0,0,1-45.24,11.22,206.25,206.25,0,0,1-22.31,1.92,175,175,0,0,1-65.21-10.44q-19.92-7.2-89.11-40L359.17,441,489.85,340.81,714.72,168.36l60.45,29.21,82.27,39.75q42.38,20.48,59.69,33.23t22.59,29.27q5.28,16.5-2.32,36T906.77,373q-25,19.17-59.35,28.63a200.57,200.57,0,0,1-25.31,5.26,181.42,181.42,0,0,1-42.64,1q23.17,23,17.91,49-5.18,25.62-35.3,49Zm-110.7-20.9q21.38-3.75,40.3-18.27,16-12.27,19.37-24.59c2.23-8.22.16-16-6.28-23.36s-26-18.94-58.84-34.79L586.24,357l-95.08,72.91,66.74,32.25q39,18.82,51.62,22.21a86.72,86.72,0,0,0,36.77,2.34q1.8-.25,3.6-.57m77.74-237.58-82.21,63.05,47.24,22.84q42.14,20.35,53.58,24.37a87.8,87.8,0,0,0,41.84,4.3A80.51,80.51,0,0,0,826.45,347q16.47-12.65,17.66-25t-14.67-22.7q-9.51-6.12-60.4-30.71l-41.41-20"
            transform="translate(-278.89 -168.36)"
            fill="#020B18"
          />
          <polygon
            points="653.62 556.55 701.63 247.98 765.5 199.25 689.51 646.56 622.2 697.9 559.4 454.74 497.25 793.21 483.62 803.61 428.44 845.7 353.14 513.82 418.07 464.28 465.64 695.43 522.89 384.33 598.33 326.78 653.62 556.55"
            fill="#020B18"
          />
        </svg>
      </S.Baw>
    </S.Copyright>
  </S.Wrapper>
)

export default Footer
