import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'withBorder'
>

const WrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
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
    color: ${theme.colors.secondary};
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
      margin-left: ${theme.spacings.xxsmall};
    }
  `,
  withBorder: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.secondary};
    color: ${theme.colors.secondary};
    background: none;
    box-shadow: none;
    :hover {
      background: ${theme.colors.secondary};
      border: 1px solid #6eb9f7;
      transition: background 0s;
      color: ${theme.colors.white};
    }
    :active {
      background-color: ${theme.colors.secondary};
      background-size: 100%;
      transition: border 0s;
      transition: background 0s;
      border: 1px solid #6eb9f7;
      color: ${theme.colors.white};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, withBorder }) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    background-position: center;
    transition: background 0.8s;
    box-shadow: 0 0 4px #999;
    cursor: pointer;
    outline: none;
    :hover {
      background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
        center/15000%;
    }
    :active {
      background-color: #6eb9f7;
      background-size: 100%;
      transition: background 0s;
    }
    ${!!size && WrapperModifiers[size](theme)};
    ${!!fullWidth && WrapperModifiers.fullWidth()};
    ${hasIcon && WrapperModifiers.widthIcon(theme)};
    ${withBorder && WrapperModifiers.withBorder(theme)};
  `}
`
