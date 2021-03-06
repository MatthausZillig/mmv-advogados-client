import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { CookieProps } from '.'

const WrapperModifiers = {
  isClose: () => css`
    display: none;
    color: #fff;
  `
}

export const Wrapper = styled.main<CookieProps>`
  ${({ theme, close }) => css`
    position: fixed;
    bottom: 20px;
    right: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 400px;
    height: 200px;
    z-index: ${theme.layers.alwaysOnTop};
    background: ${theme.colors.lightBlue};
    ${!!close && WrapperModifiers.isClose()}
    p {
      margin: 0;
    }
    ${media.lessThan('medium')`
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 200px;
      left: 0;
      bottom: 0;
      padding: ${theme.spacings.xsmall};
    `}
  `}
`

export const WrapperButtons = styled.div`
  ${({ theme }) => css`
    display: 'flex';
    justify-content: 'flex-start';
    width: '100%';
    button {
      margin-right: ${theme.spacings.medium};
    }
  `}
`
