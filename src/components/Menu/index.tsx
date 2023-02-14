import { useState } from 'react'
import Link from 'next/link'

import * as S from './styles'

import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import ContactForm from 'components/ContactForm'

export type MenuProps = {
  inScroll?: boolean
}

const Menu = () => {
  const [navbar, setNavbar] = useState(false)
  const [isActive, setIsActive] = useState(false)

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
      <ContactForm active={isActive} set={setIsActive} />
      <S.TopBar>
        <div>
          <p>Contato:</p>
          <a href="tel:+55-11-2359-9600">+55 11 2359-9600</a>
        </div>
      </S.TopBar>
      <S.Wrapper data-testid="menu" inScroll={navbar}>
        <S.MenuWrapper>
          <img src="/img/brandmark-design.png" />
          <MediaMatch lessThan="large">
            <S.Input id="menu-hamburguer" type="checkbox" />
            <label htmlFor="menu-hamburguer">
              <S.MenuMobile>
                <span></span>
              </S.MenuMobile>
            </label>
            <S.Ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Escritorio">Escritório</Link>
              </li>
              <li>
                <Link href="/areas">Áreas de atuação</Link>
              </li>
              <li>
                <Link href="/Equipe">Sócios</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <div onClick={() => setIsActive(!isActive)}>Contato</div>
              </li>
            </S.Ul>
          </MediaMatch>
          <S.MenuNav>
            <S.MenuLinkHome>
              <Link href="/">Home</Link>
            </S.MenuLinkHome>
            <S.MenuLink>
              <Link href="/Escritorio">Escritório</Link>
            </S.MenuLink>
            <S.MenuLink>
              <Link href="/areas">Áreas de atuação</Link>
              <S.MenuItensAreas>
                <S.SubItens>
                  <Link href="/areas/area/civil">Direito Civil</Link>
                </S.SubItens>
                <S.SubItens>
                  <Link href="/areas/area/trabalho">Direito do Trabalho</Link>
                </S.SubItens>
                <S.SubItens>
                  <Link href="/areas/area/condominial">
                    Direito Imobiliário
                  </Link>
                </S.SubItens>
                <S.SubItens>
                  <Link href="/areas/area/empresarial">
                    Direito Empresarial
                  </Link>
                </S.SubItens>
                <S.SubItens>
                  <Link href="/areas/area/consumidor">
                    Direito do Consumidor
                  </Link>
                </S.SubItens>
                <S.SubItens>
                  <Link href="/areas/area/familia">Direito de Família</Link>
                </S.SubItens>
              </S.MenuItensAreas>
            </S.MenuLink>
            <S.MenuLink>
              <Link href="/Equipe">Equipe</Link>
            </S.MenuLink>
            <S.MenuLink>
              <Link href="/blog">Blog</Link>
            </S.MenuLink>
          </S.MenuNav>
          <Button onClick={() => setIsActive(!isActive)}>Contato</Button>
        </S.MenuWrapper>
      </S.Wrapper>
    </>
  )
}

export default Menu
