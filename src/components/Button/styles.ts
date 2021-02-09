import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'withBorder'
>

const WrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  widthIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    background: none;
    box-shadow: none;
    :hover svg {
      margin-left: 1.2rem;
      transition: margin-left 100ms;
    }
    :hover {
      background: none;
    }
    :active {
      background-color: none;
      background-size: 100%;
    }
    svg {
      width: 1.5rem;
      margin-left: ${theme.spacings.xsmall};
    }
  `,
  withBorder: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    background: none;
    box-shadow: none;
    :hover {
      background: rgba(25, 118, 210, 0.04);
      border: 1px solid ${theme.colors.primary};
      transition: background 100ms ease;
    }
    :active {
      background-color: ${theme.colors.primary};
      background-size: 100%;
      transition: border 0s;
      transition: background 100s ease;
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, withBorder }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    background-position: center;
    transition: background 0.8s;
    box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.52);
    cursor: pointer;
    outline: none;
    text-decoration: none;
    :hover {
      background: ${theme.colors.secondary};
        radial-gradient(circle, transparent 1%, ${theme.colors.darkBlue} 1%)
        center/15000%;
    }
    :active {
      background-color: ${theme.colors.darkBlue};
      background-size: 100%;
      transition: background 0s;
    }
    ${!!size && WrapperModifiers[size](theme)};
    ${!!fullWidth && WrapperModifiers.fullWidth()};
    ${hasIcon && WrapperModifiers.widthIcon(theme)};
    ${withBorder && WrapperModifiers.withBorder(theme)};
  `}
`
