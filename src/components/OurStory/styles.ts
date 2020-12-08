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
    ${Paragraphs} {
      width: 500px;
      height: 200px;
    }

    ${media.lessThan('medium')`
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      ${Paragraphs} {
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
    justify-content: space-around;
    height: 500px;
    width: 100px;
    ${Paragraphs} {
      width: 500px;
      height: 120px;
    }
    .imageContainer div {
      display: flex;
      justify-content: center;
    }
    p {
      text-align: left;
      font-size: ${theme.font.sizes.small};
      line-height: 1.5;
      margin-top: ${theme.spacings.small};
    }
    img {
      width: 50%;
    }
    ${media.lessThan('small')`
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      ${Paragraphs} {
        width: 300px;
        height: 100%;
      }
      img {
        display: none;
      }
    `}
  `}
`

export const Paragraphs = styled.div``
