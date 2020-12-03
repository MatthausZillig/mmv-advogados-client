import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};
    margin-left: auto;
    margin-right: auto;
    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr)
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      a {
        height: 48px;
      }
  `}
    a,
    span {
      display: block;
      color: ${theme.colors.mainBg};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
    ${media.lessThan('medium')`
      flex-direction: Column;
    `}
  `}
`
export const Baw = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 130px;
    transition: fill 0.1s ease;
    &:hover g polygon {
      fill: #ff6495;
    }
    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.small};
    `}
    cursor: pointer;
  `}
`
