import styled, { css } from 'styled-components'
import { BannerGridProps } from '.'
import media from 'styled-media-query'

import * as RibbonStyles from 'components/Ribbon/styles'

type BannerType = Pick<BannerGridProps, 'classe'>

const WrapperModifiers = {
  two: () => css`
    grid-template-areas:
      'one one two two'
      'tree tree four four'
      'five five six six';
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `,
  hover: () => css`
    a {
      opacity: 0;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
      a {
        opacity: 1;
      }
    }
  `
}
export const Wrapper = styled.section<BannerType>`
  ${({ theme, classe }) => css`
    display: grid;
    height: 70rem;
    cursor: pointer;

    grid-template-areas:
      'one two two'
      'one two two'
      'one tree four'
      'one five six';

    grid-template-columns: 2fr 1fr 1fr;
    column-gap: ${theme.spacings.small};
    row-gap: ${theme.spacings.medium};
    ${media.lessThan('medium')`
      display: flex;
      overflow: hidden;
      overflow-x: scroll;
      height: 32rem;
    `}
    ${!!classe && WrapperModifiers.two()};
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

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    &:hover {
      background-color: rgba(0, 0, 0, 0.9);
    }
    position: relative;
    padding: ${theme.spacings.small};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${media.greaterThan('large')`
      padding: ${theme.spacings.medium};
      position: absolute;
      bottom: 0;
      left: 0;
    `}
    ${media.lessThan('medium')`

      width: 280px;
      height: 100%;
    `}
  `}
`

export const Image = styled.div`
  ${({ theme }) => css`
    position: relative;
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
      a {
        opacity: 1;
      }
    }
    a {
      opacity: 0;
    }
    ${media.lessThan('large')`
      width: 100%;
      height: 300px;
      margin: 0 1rem 0 0;
      h2,
      h3 {
        font-size: 20px;
      }
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
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
    }
    background-color: ${theme.colors.lightGray};
  `}
`

export const Image2 = styled(Image)`
  position: relative;
  grid-area: two;
  ${media.lessThan('medium')`
  h2,
  h3 {
    font-size: 20px;
  }
  `}
`

export const Image3 = styled(Image)`
  position: relative;
  h2,
  h3 {
    font-size: 20px;
  }
  grid-area: tree;
`

export const Image4 = styled(Image)`
  position: relative;
  grid-area: four;
  h2,
  h3 {
    font-size: 20px;
  }
`

export const Image5 = styled(Image)`
  position: relative;
  grid-area: five;
  h2,
  h3 {
    font-size: 20px;
  }
`

export const Image6 = styled(Image)<BannerType>`
  ${({ classe }) => css`
    grid-area: six;
    background-color: rgba(0, 0, 0, 0.6);

    a {
      opacity: 1;
    }
    ${!!classe && WrapperModifiers.hover()};
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
