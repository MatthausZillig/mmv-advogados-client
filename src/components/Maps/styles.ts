import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Googlemaps } from '@styled-icons/simple-icons/Googlemaps'

export const Wrapper = styled.main`
  padding-top: 8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  ${media.lessThan('medium')`
        flex-direction: column;
        padding-top: 2rem;
  `}
`

export const Column = styled.div`
  flex: 1;
  ${media.lessThan('medium')`
        width: 100%;
        flex: 1;
        order: 2;
  `}
`
export const Column2 = styled.div`
  flex: 2;
  ${media.lessThan('medium')`
        flex: 1;
        width: 100%;
        order: 1;
        margin-bottom: 2rem;
  `}
`

export const Card = styled.div`
  width: 40rem;
  height: 70%;
  background-color: #fff;
  padding: 4rem;
  ${media.lessThan('medium')`
        width: 100%;
        height: 100%;
  `}
`

export const Map = styled.div`
  height: 46.7vh;
  width: 100%;
`
export const Marker = styled(Googlemaps)`
  color: red;
  width: 30px;
  height: 30px;
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    border-bottom: 0.5px solid ${theme.colors.lightGray};
    padding: 1rem 0 1rem 0;
    margin-bottom: 2rem;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    text-align: left;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
