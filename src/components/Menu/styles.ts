import styled, { css, DefaultTheme } from 'styled-components'
import { MenuProps } from '.'

const wrapperModifiers = {
  inScroll: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    position: fixed;
  `
}

export const Wrapper = styled.menu<MenuProps>`
  ${({ theme, inScroll }) => css`
    position: fixed;
    width: 100%;
    height: 9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(250, 250, 250, 0.1);
    ${inScroll && wrapperModifiers.inScroll(theme)};
  `}
`
export const MenuLink = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 40px;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    display: flex;
    align-items: center;
    color: ${theme.colors.black};
    cursor: pointer;
    &:hover ${MenuItens} {
      display: block;
    }
    &:hover {
      color: ${theme.colors.secondary};
    }
    &:hover {
      &::after {
        content: '';
        position: absolute;
        top: 3rem;
        display: block;
        height: 0.2rem;
        background-color: ${theme.colors.secondary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const MenuLinkHome = styled(MenuLink)`
  ${({ theme }) => css`
    &::after {
      content: '';
      position: absolute;
      top: 3rem;
      display: block;
      height: 0.2rem;
      background-color: ${theme.colors.secondary};
      animation: hoverAnimation 0.2s forwards;
    }
  `}
`

export const MenuNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0 ${theme.spacings.small} 0;
  `}
`
export const MenuItens = styled.div`
  ${({ theme }) => css`
    display: none;
    position: absolute;
    min-width: 130px;
    width: 60px;
    top: ${theme.spacings.large};
    z-index: 1;
    background: ${theme.colors.white};
  `}
`
export const MenuItensAreas = styled(MenuItens)`
  min-width: 170px;
`

export const MenuItensLaywers = styled(MenuItens)`
  min-width: 120px;
`

export const SubItens = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    background-color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    &:hover {
      background-color: ${theme.colors.lightBlue};
    }
  `}
`
