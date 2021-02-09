import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

export const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},

    margin-bottom: calc(${theme.spacings.small} * 2);
  `}
`

export const SectionHeadings = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.small} * 2);
    margin-top: 22rem;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `}
`

export const SectionImage = styled(Sections)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    overflow: hidden;
    height: 45rem;
    img {
      object-fit: cover;
      object-position: bottom;
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`

export const SectionParagraph = styled(Sections)`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge};
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
