import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10rem;
  flex-wrap: wrap;
`

export const Avatar = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    width: 110px;
    border: 4px solid #fafafa;
    height: 110px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 100%;
    object-fit: cover;
    background-color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.small};
    transition: all ease-in-out;
    object-fit: cover;
    img {
      object-fit: cover;
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
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`

export const Socio = styled.div`
  ${({ theme }) => css`
      width: 38rem;
      height: 65rem;
      background: rgb(247, 249, 250);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      border-radius: ${theme.border.radius};
      padding: ${theme.spacings.medium};
      text-align: left;
      margin-bottom: 4rem;
      ${media.lessThan('medium')`
        width: 100%
      `}
      &:hover {
        transform: translate3d(0,-5px,0);
        box-shadow: 0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important;
        ${Avatar} {
          box-shadow: 0 5px 15px 1px rgba(0, 0, 0, 0.2);
          width: 120px;
          height: 120px;
        }
      }
    }
  `}
`
