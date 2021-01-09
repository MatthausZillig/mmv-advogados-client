import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    margin-bottom: calc(${theme.spacings.small} * 2);
  `}
`

export const SectionBanner = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: 2rem;
    margin-top: 15rem;
    ${media.greaterThan('large')`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);
    margin-top: -20rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 17rem;
      background-color: ${theme.colors.white};
      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    `}
  `}
`

export const SectionHeadings = styled(Sections)``

export const SectionQuemSomos = styled(Sections)`
  background-color: white;
  padding: 8rem;
  ${media.lessThan('medium')`
       padding: 2rem 1rem;
  `}
`

export const SectionMaps = styled(Sections)`
  padding: 8rem;
  ${media.lessThan('medium')`
       padding: 2rem 1rem;
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
