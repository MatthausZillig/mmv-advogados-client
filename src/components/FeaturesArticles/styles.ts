import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`

export const FeatureTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.lessThan('medium')`
    flex-direction: column;
    justify-content: space-between;
    h2 {
      display: none;
    }
    button {
      display: none;
    }
  `}
`

export const FeatureBox = styled.div`
  display: flex;
  width: 538px;
  background: transparent;
  box-shadow: none;
  border-radius: 8px;
  flex-direction: column;
  padding-bottom: 16px;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 538px;
    height: 300px;
    transform: scale(1);
    ${media.lessThan('medium')`
    width: 300px;
  `}
    &:hover {
      transition: transform 450ms ease-out;
      transform: scale(1.2);
    }
  }
  ${media.lessThan('medium')`
    width: 300px;
  `}
`

export const Image = styled.img`
  object-fit: cover;
  width: 538px;
  height: 300px;
  transform: scale(1);
  ${media.lessThan('medium')`
    width: 300px;
  `}
  &:hover {
    transition: transform 450ms ease-out;
    transform: scale(1.2);
  }
`

export const Card = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 32px;
  z-index: 1;
  background: #fff;
  box-shadow: 0 3px 10px 2px rgba(0, 0, 0, 0.1);
  margin-top: -48px;
  border-radius: 8px;
  ${media.lessThan('medium')`
    width: 300px;
  `}
`

export const FeatureCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin-top: calc(${theme.spacings.large} * 2);
    ${media.lessThan('medium')`
    flex-direction: column;
    margin-top: 0;
  `}
  `}
`

export const Subtitle = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`
