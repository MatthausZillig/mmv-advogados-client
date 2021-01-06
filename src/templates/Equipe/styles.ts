import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    margin-bottom: calc(${theme.spacings.small} * 2);
  `}
`

export const SectionTeam = styled(Sections)`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`

export const SectionHeadings = styled(Sections)`
  ${({ theme }) => css`
    padding-top: 24rem;
    margin-bottom: calc(${theme.spacings.small} * 2);
  `}
`

export const SectionHeadingsTwo = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.small} * 2);
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xxlarge};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
    `}
  `}
`
