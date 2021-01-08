import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
`

export const Column = styled.div`
  padding-top: 4rem;
`

export const ColumnDois = styled(Column)`
  justify-content: center;
  align-items: center;
  img {
    width: 600px;
  }
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
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
