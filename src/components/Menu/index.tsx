import { useState } from 'react'
import Link from 'next/link'

import * as S from './styles'

import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  inScroll?: boolean
}

const Menu = () => {
  const [navbar, setNavbar] = useState(false)

  if (typeof window !== 'undefined') {
    const changeBackground = () => {
      if (window.scrollY >= 50) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    window.addEventListener('scroll', changeBackground)
  }

  return (
    <>
      <S.TopBar>
        <p>Contato:</p>
        <a href="tel:+55-11-2359-9600">+55 11 2359-9600</a>
      </S.TopBar>
      <S.Wrapper data-testid="menu" inScroll={navbar}>
        <S.MenuWrapper>
          <Logo width={400} />
          <MediaMatch lessThan="large">
            <S.Input id="menu-hamburguer" type="checkbox" />
            <label htmlFor="menu-hamburguer">
              <S.MenuMobile>
                <span></span>
              </S.MenuMobile>
            </label>
            <S.Ul>
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/escritorio">Escritório</Link>
              </li>
              <li>
                <Link href="/areas">Áreas de atuação</Link>
              </li>
              <li>
                <Link href="/">Sócios</Link>
              </li>
              <li>
                <Link href="/trabalhe-conosco">Trabalhe conosco</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contato">Contato</Link>
              </li>
            </S.Ul>
          </MediaMatch>
          <S.MenuNav>
            <S.MenuLinkHome>Home</S.MenuLinkHome>
            <S.MenuLink>
              Escritório
              <S.MenuItens>
                <S.SubItens>
                  <Link href="/sobre/quem-somos">Quem Somos</Link>
                </S.SubItens>
                <S.SubItens>
                  <Link href="/sobre/onde-estamos">Onde Estamos</Link>
                </S.SubItens>
              </S.MenuItens>
            </S.MenuLink>
            <S.MenuLink>
              Áreas de atuação
              <S.MenuItensAreas>
                <S.SubItens>
                  <Link href="/areas/civil">Direito Civil</Link>
                </S.SubItens>
                <S.SubItens>
                  <Link href="/areas/trabalho">Direito do Trabalho</Link>
                </S.SubItens>
                <S.SubItens>
                  <Link href="/areas/imobiliario">Direito Imobiliário</Link>
                </S.SubItens>
                <S.SubItens>
                  <Link href="/areas/empresarial">Direito Empresarial</Link>
                </S.SubItens>
                <S.SubItens>
                  <Link href="/areas/consumidor">Direito do Consumidor</Link>
                </S.SubItens>
                <S.SubItens>
                  <Link href="/areas/familia">Direito de Família</Link>
                </S.SubItens>
              </S.MenuItensAreas>
            </S.MenuLink>
            <S.MenuLink>
              Sócios
              <S.MenuItensLaywers>
                <S.SubItens>
                  <Link href="/socios">Sócios</Link>
                </S.SubItens>
              </S.MenuItensLaywers>
            </S.MenuLink>
            <S.MenuLink>
              <Link href="/blog">Blog</Link>
            </S.MenuLink>
          </S.MenuNav>
          <Button>Contato</Button>
        </S.MenuWrapper>
      </S.Wrapper>
    </>
  )
}

export default Menu
