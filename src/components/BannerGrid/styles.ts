import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from 'components/Ribbon/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    height: 70rem;
    grid-template-areas:
      'one two two'
      'one two two'
      'one tree four'
      'one five six';
    column-gap: ${theme.spacings.small};
    row-gap: ${theme.spacings.medium};
    ${media.lessThan('medium')`
    row-gap: ${theme.spacings.xxsmall};
      grid-template-areas:
        'one'
        'two'
        'tree'
        'four'
        'five'
        'six';
    `}
  `}
`
export const WrapperImage = styled.main`
  position: relative;
  ${media.lessThan('large')`
    ${RibbonStyles.Wrapper} {
      right: 0;
      &::before {
        display: none;
      }
    }
  `}
  ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`

type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
    position: relative;
    ${media.lessThan('large')`
    ${RibbonStyles.Wrapper} {
      right: 0;
      &::before {
        display: none;
      }
    }
  `}
    ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
    width: 100%;
    height: 100%;
    grid-area: one;
    background-color: ${theme.colors.lightGray};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
  `}
`

export const Image2 = styled(Image)`
  grid-area: two;
`

export const Image3 = styled(Image)`
  grid-area: tree;
`

export const Image4 = styled(Image)`
  grid-area: four;
`

export const Image5 = styled(Image)`
  grid-area: five;
`

export const Image6 = styled(Image)`
  grid-area: six;
`
export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
    padding: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
      padding: ${theme.spacings.medium};
      position: absolute;
      bottom: 0;
      left: 0;
    `}
  `}
`
export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`
export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xsmall};
    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
