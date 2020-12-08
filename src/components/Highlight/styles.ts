/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;
    ${Content} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-areas: 'content floatimage';
    grid-template-columns: 2fr 1.3fr;
    ${Content} {
      text-align: left;
    }
    ${FloatImage} {
      justify-self: end;
    }
  `
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    /* background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover; */
    height: 23rem;
    display: grid;
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;
    .backgroundImage {
      width: 100%;
      position: absolute;
      object-fit: cover;
      top: 0;
    }
    cursor: grab;
    &:hover ::after {
      background-color: rgba(0, 0, 0, 0.8);
    }
    &:hover ${ContentBox} {
      background-color: rgba(0, 0, 0, 0);
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }
    ${media.greaterThan('medium')`
      height: 35rem;
    `}

    ${wrapperModifiers[alignment!]()}
  `}
`

export const FloatImage = styled.div`
  ${({ theme }) => css`
    grid-area: floatimage;
    z-index: ${theme.layers.base};
    align-self: end;
    margin-bottom: -60px;
    .floatImage {
      max-height: 23rem;
      max-width: 200px;
      ${media.greaterThan('medium')`
      max-height: 32rem;
      max-width: 100%;
    `}
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};
    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
    ${media.lessThan('medium')`
      padding: 1.6rem 0 0 1.6rem;
    `}
  `}
`

export const ContentBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    align-items: flex-start;
    background-color: rgba(0, 0, 0, 0.8);
    padding: ${theme.spacings.small};
    &:hover {
      background-color: rgba(0, 0, 0, 0);
    }
    ${media.lessThan('medium')`
      width: 100%;
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
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
