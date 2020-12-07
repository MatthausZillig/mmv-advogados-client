import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

import * as HighlightStyles from 'components/Highlight/styles'

const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${HighlightStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }
    margin-bottom: calc(${theme.spacings.small} * 2);
  `}
`

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);
    ${media.lessThan('medium')`
      margin-top: 16rem;
    `}
    ${media.greaterThan('medium')`
      margin: 20rem 0 ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const SectionNews = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);
    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}
    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 17rem;
      padding-bottom: 17rem;
      background-color: ${theme.colors.white};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    `}
  `}
`

export const SectionOurStory = styled(SectionNews)`
  ${({ theme }) => css`
    padding-top: 17rem;
    padding-bottom: 17rem;
    background-color: #fff;
    ${media.lessThan('medium')`
    padding-top: 8rem;
    padding-bottom: 10rem;
    ${HeadingStyles.Wrapper} {
          color: ${theme.colors.black};
        }
    `}
  `}
`

export const SectionMostPopular = styled(Sections)``

export const SectionHeadings = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.small} * 2);
  `}
`

export const SectionUpcoming = styled(Sections)`
  ${({ theme }) => css`
    ${HighlightStyles.Wrapper} {
      margin-top: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`

export const SectionSocios = styled(Sections)`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      .slick-slide {
        padding: 2rem;
      }

      margin-bottom: calc(${theme.spacings.medium} * 2);

    `}
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};
      li {
        background: ${theme.colors.lightBlue};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;
        &.slick-active {
          background: ${theme.colors.heading};
        }
      }
      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }
    ${media.greaterThan('large')`
    margin-bottom: calc(6.4rem * 2);

      .slick-dots {
        flex-direction: row;
        height: 100%;
        top: 0;
        margin: 0;
        li {
          margin: ${theme.spacings.small} ${theme.spacings.xsmall};
        }
      }
    `}
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xxlarge};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`
