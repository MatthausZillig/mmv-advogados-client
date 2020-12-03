import { useState } from 'react'
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
      if (window.scrollY >= 60) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    window.addEventListener('scroll', changeBackground)
  }

  return (
    <S.Wrapper data-testid="menu" inScroll={navbar}>
      <S.MenuWrapper>
        <Logo width={400} />
        <MediaMatch lessThan="medium">
          <S.Input id="menu-hamburguer" type="checkbox" />
          <label htmlFor="menu-hamburguer">
            <S.MenuMobile>
              <span></span>
            </S.MenuMobile>
          </label>
          <S.Ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/escritorio">Escritório</a>
            </li>
            <li>
              <a href="/areas">Áreas de atuação</a>
            </li>
            <li>
              <a href="/">Sócios</a>
            </li>
            <li>
              <a href="/trabalhe-conosco">Trabalhe conosco</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </S.Ul>
        </MediaMatch>
        <S.MenuNav>
          <S.MenuLinkHome>Home</S.MenuLinkHome>
          <S.MenuLink>
            Escritório
            <S.MenuItens>
              <S.SubItens>Quem somos</S.SubItens>
              <S.SubItens>Onde estamos</S.SubItens>
            </S.MenuItens>
          </S.MenuLink>
          <S.MenuLink>
            Áreas de atuação
            <S.MenuItensAreas>
              <S.SubItens>Direito Civil</S.SubItens>
              <S.SubItens>Direito do Trabalho</S.SubItens>
              <S.SubItens>Direito Imobiliário</S.SubItens>
              <S.SubItens>Direito Empresarial</S.SubItens>
              <S.SubItens>Direito do Consumidor</S.SubItens>
              <S.SubItens>Direito de Familía</S.SubItens>
            </S.MenuItensAreas>
          </S.MenuLink>
          <S.MenuLink>
            Advogados
            <S.MenuItensLaywers>
              <S.SubItens>Sócios</S.SubItens>
            </S.MenuItensLaywers>
          </S.MenuLink>
          <S.MenuLink>Blog</S.MenuLink>
        </S.MenuNav>
        <Button>Contato</Button>
      </S.MenuWrapper>
    </S.Wrapper>
  )
}

export default Menu
