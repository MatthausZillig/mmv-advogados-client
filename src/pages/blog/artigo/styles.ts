import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},

    margin-bottom: calc(${theme.spacings.small} * 2);
  `}
`

export const SectionHeadings = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.small} * 2);
    margin-top: 22rem;
  `}
`

export const SectionImage = styled(Sections)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    height: 45rem;
    position: relative;
    img {
      object-fit: cover;
      object-position: bottom;
      margin-bottom: ${theme.spacings.medium};
      width: 1200px;
      ${media.lessThan('medium')`
      width: 340px;
    `}
    }
    ${media.lessThan('medium')`
      height: 100%;
    `}
  `}
`

export const SectionParagraph = styled(Sections)`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
    border-radius: ${theme.border.radius};
    ul {
      margin-left: ${theme.spacings.medium};
    }
    ul,
    p {
      margin-top: ${theme.spacings.medium};
    }
    li {
      text-decoration: none;
    }
    ${media.lessThan('medium')`
      padding: 2rem;
    `}
  `}
`

export const SectionBottonImage = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    background: rgb(247, 249, 250);
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 4rem;
    font-size: ${theme.font.sizes.xsmall};
    button {
      margin-left: ${theme.spacings.xsmall};
      outline: none;
    }
    ${media.lessThan('medium')`
      padding: 2rem;
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
