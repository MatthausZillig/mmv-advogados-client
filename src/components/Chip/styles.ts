import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxsmall};
    margin: 0px 8px 8px 0px;
    padding: 4px 8px;
    background: ${theme.colors.secondary};
    border-radius: 4px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
