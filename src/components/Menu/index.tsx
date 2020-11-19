import { useState } from 'react'
import * as S from './styles'
import Logo from 'components/Logo'

export type MenuProps = {
  inScroll?: boolean
}

const Menu = ({ inScroll }: MenuProps) => {
  return (
    <S.Wrapper data-testid="menu" inScroll={inScroll}>
      <S.MenuItens>
        <Logo />
        <S.MenuNav>
          <S.MenuLink>Home</S.MenuLink>
          <S.MenuLink>Escritório</S.MenuLink>
          <S.MenuLink>Áreas de atuação</S.MenuLink>
          <S.MenuLink>Advogados</S.MenuLink>
          <S.MenuLink>Blog</S.MenuLink>
        </S.MenuNav>
      </S.MenuItens>
    </S.Wrapper>
  )
}

export default Menu
