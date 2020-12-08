import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'
import media from 'styled-media-query'
import { MenuProps } from '.'

const wrapperModifiers = {
  inScroll: (theme: DefaultTheme) => css`
    height: 7rem;
    background: ${theme.colors.white};
    position: fixed;
    top: 0;
    color: ${theme.colors.black};
    transform: translate(0%, 0%);
    svg {
      width: 280px;
    }
    ${TopBar} {
      transform: translate(-10%, -10%);
      display: none;
    }
  `,
  inScrollMenuLink: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    position: fixed;
    top: 0;
    color: ${theme.colors.black};
  `
}

export const TopBar = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: absolute;
    opacity: 1;
    top: 0;
    height: 40px;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    p {
      margin-right: ${theme.spacings.xxsmall};
    }
    color: ${theme.colors.white};
    /* transition: transform 0.1 ease-in-out; */
    z-index: ${theme.layers.alwaysOnTop};
    background-color: ${theme.colors.primary};
    padding-left: ${theme.spacings.medium};
    padding-right: ${theme.spacings.small};
  `}
`

export const Wrapper = styled.menu<MenuProps>`
  ${({ theme, inScroll }) => css`
    color: ${theme.colors.black};
    width: 100%;
    height: 12rem;
    display: flex;
    position: fixed;
    top: 40px;
    align-items: center;
    justify-content: space-evenly;
    z-index: ${theme.layers.alwaysOnTop};
    background: ${theme.colors.white};
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease;
    ${inScroll && wrapperModifiers.inScroll(theme)};
    ${media.lessThan('medium')`
    position: fixed;
      justify-content: center;
      svg {
        width: 275px;
      }
      ${MenuNav} {
        display: none;
      }
      button {
        display: none;
      }
    `}
    ${media.lessThan('large')`
      button {
        display: none;
      }
    `}
  `}
`

export const MenuMobile = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    :hover {
      box-shadow: 0 0 0 8px #fff, 0 0 0 0 #fff;
      transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);
    }

    span {
      position: relative;
      display: block;
      background-color: ${theme.colors.black};
      width: 30px;
      height: 2px;
      top: 24px;
      left: 10px;
      transition: 0.5s ease-in-out;

      ::before,
      ::after {
        background-color: ${theme.colors.black};
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.5s ease-in-out;
      }
      ::before {
        top: -10px;
      }
      ::after {
        bottom: -10px;
      }
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    display: none;

    :checked ~ label span {
      transform: rotate(45deg);
    }

    :checked ~ ul {
      opacity: 1;
      width: 200px;
    }

    :checked ~ label span::before {
      transform: rotate(90deg);
      top: 0;
    }
    :checked ~ label span::after {
      transform: rotate(90deg);
      bottom: 0;
    }

    :checked ~ label ${MenuMobile} {
      box-shadow: 0 0 0 130vw #fff, 0 0 0 130vh #fff;
      z-index: ${theme.layers.alwaysOnTop};
    }

    :checked ~ label ${MenuMobile} div {
      display: none;
    }
  `}
`

export const Ul = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    transform: translate(-50%, 15%);
    list-style: none;
    opacity: 0;
    transition: all 0.25s 0.1s cubic-bezier(0, 1.07, 0, 1.02);
    a {
      display: block;
      margin-bottom: 40px;
      color: ${theme.colors.darkBlue};
      font-size: ${theme.font.sizes.large};
      text-decoration: none;
    }
  `}
`

export const MenuLink = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 40px;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    a {
      text-decoration: none;
      color: ${theme.colors.black};
    }
    text-align: center;
    display: flex;
    align-items: center;
    z-index: ${theme.layers.alwaysOnTop};
    cursor: pointer;

    &:hover ${MenuItens} {
      opacity: 1;
      display: block;
     transform: translate(-50% -50%)
      transition: opacity 222ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        transform 222ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      transform-origin: 175px 0px;
      background-color: ${theme.colors.heading};
    }
    &:hover a{
      color: ${theme.colors.secondary};
    }
  `}
`

export const MenuLinkHome = styled(MenuLink)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `}
`

export const MenuNav = styled.div`
  display: none;
  ${media.greaterThan('large')`
      display: flex;
      align-items: center;
      justify-content: space-between;
  `}
`

export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0 ${theme.spacings.small} 0;
    ${media.lessThan('medium')`
    padding: ${theme.spacings.small} ${theme.spacings.xxsmall} ${theme.spacings.small} ${theme.spacings.xxsmall};
    `}
  `}
`
export const MenuItens = styled.div`
  ${({ theme }) => css`
    display: none;
    background-color: ${theme.colors.heading};
    position: absolute;
    width: 130px;
    top: ${theme.spacings.large};
    z-index: 1;
    box-shadow: 0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09);
  `}
`
export const MenuItensAreas = styled(MenuItens)`
  min-width: 170px;
`

export const MenuItensLaywers = styled(MenuItens)`
  min-width: 120px;
`

export const SubItens = styled.div`
  ${({ theme }) => css`
    a {
      color: ${theme.colors.black};
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
      background-color: ${theme.colors.lightBlue};
      font-size: ${theme.font.sizes.xsmall};
      &:hover {
        background-color: ${darken(0.1, theme.colors.lightBlue)};
      }
    }
  `}
`
