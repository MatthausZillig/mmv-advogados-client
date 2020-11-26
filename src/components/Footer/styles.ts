import styled, { css } from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'

export const IconStyleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    width: 200px;
    margin-top: ${theme.spacings.small};
    cursor: pointer;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.small};
    ${StyledIconBase} {
      &:hover {
        color: ${theme.colors.darkBlue};
      }
      color: ${theme.colors.secondary};
      width: 28px;
      /* icon styles go here */
    }
  `}
`

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
`

export const FooterMap = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    align-items: center;
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.large};
    color: ${theme.colors.black};
    flex-direction: column;
    justify-content: space-evenly;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url('/img/map.png');
      opacity: 0.5;
      background-repeat: no-repeat;
      background-size: cover;
    }
  `}
`

export const FooterCopyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.black};
    padding: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.small};
  `}
`
