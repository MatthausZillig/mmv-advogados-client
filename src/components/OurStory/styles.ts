import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export const FirstColumn = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 500px;
    width: 100px;
    div {
      width: 500px;
    }
    ${media.lessThan('medium')`
      div {
        width: 300px;
      }
    `}
    p {
      text-align: left;
      font-size: ${theme.font.sizes.small};
      line-height: 1.5;
      margin-top: ${theme.spacings.small};
    }
  `}
`

export const SecondColumn = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    div {
      width: 500px;
    }
    ${media.lessThan('medium')`
      div {
        width: 300px;
      }
    `}
    p {
      text-align: left;
      font-size: ${theme.font.sizes.small};
      line-height: 1.5;
      margin-top: ${theme.spacings.small};
    }
    img {
      max-width: 60%;
    }
  `}
`
