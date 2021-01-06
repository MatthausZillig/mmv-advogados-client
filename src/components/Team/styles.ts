import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const Avatar = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    width: 110px;
    border: 4px solid ${theme.colors.white};
    height: 110px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 100%;
    object-fit: cover;
    background-color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    background: rgb(247, 249, 250);
    box-shadow: none;
    border-radius: ${theme.border};
    flex-grow: 0;
    max-width: 32%;
    flex-basis: 32%;
    padding: 2.4rem;
    transition: all ease-in-out;
    margin: ${theme.spacings.xxsmall};
    .cardContainer {
      display: 'flex';
      justify-content: 'space-between';
      ${media.greaterThan('medium')`
          flex-direction: 'column';
          display: flex;
          justify-content: center;
          align-items: center;
          div {
            margin: 0 auto;
            text-align: center;
          }
      `}
    }
    ${media.lessThan('medium')`
        width: 100%
        flex-grow: 0;
        max-width: 100%;
        flex-basis: 100%;
      `}
    &:hover {
      transform: translate3d(0, -5px, 0);
      box-shadow: 0 1.5rem 2.5rem rgba(22, 28, 45, 0.1),
        0 0.3rem 0.5rem -0.5rem rgba(22, 28, 45, 0.05) !important;
    }
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    text-align: left;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xsmall};
    width: 30rem;
  `}
`
