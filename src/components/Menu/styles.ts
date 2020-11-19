import styled, { css, DefaultTheme } from 'styled-components'
import { MenuProps } from '.'

const wrapperModifiers = {
  inScroll: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
    position: fixed;
  `
}

export const Wrapper = styled.menu<MenuProps>`
  ${({ theme, inScroll }) => css`
    width: 100%;
    height: 9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    ${inScroll && wrapperModifiers.inScroll(theme)};
  `}
`
export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    color: ${theme.colors.gray};
    cursor: pointer;
    &:hover {
      color: ${theme.colors.primary};
    }
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.2rem;
        background-color: ${theme.colors.primary};
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

export const MenuNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MenuItens = styled.div`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0 ${theme.spacings.small} 0;
  `}
`
