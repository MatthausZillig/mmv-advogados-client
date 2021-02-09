import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const ArticleCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 20px;
  background: rgb(247, 249, 250);
  box-shadow: 0 2px 10px 0 rgb(23 70 161 / 11%);
  transition: box-shadow 0.25s ease, transform 0.25s ease,
    -webkit-transform 0.25s ease;
  height: 400px;
  ${media.lessThan('medium')`
    height: 100%;
    width: 96%;
    margin: 0 auto;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 20px;
  `}
  :hover {
    transform: translate3d(0, -5px, 0);
    box-shadow: 0 1.5rem 2.5rem rgba(22, 28, 45, 0.1),
      0 0.3rem 0.5rem -0.5rem rgba(22, 28, 45, 0.05) !important;
  }
`
export const ArticleImage = styled.div`
  flex: 1 1 50%;
  height: 100%;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  span {
    display: inline-block;
    height: 400px;
    width: 597px;
    ${media.lessThan('medium')`
    overflow: hidden;
    height: 300px;
  `}
  }
  img {
    object-fit: cover;
    border-radius: 0px 0px 160px 0px;
    ${media.lessThan('medium')`
    overflow: hidden;
    border-radius: 0;
    height: 300px
    max-width: 597px;
  `}
  }
`

export const ArticleInfo = styled.div`
  flex: 1 1 50%;
  height: 100%;
  padding-left: 2rem;
  ${media.lessThan('medium')`
    flex: 1 !important;
  `}
  .jss78 {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .jss83 {
    display: flex;
    flex-wrap: wrap;
  }
  .jss79 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2,
  h6 {
    margin-bottom: 0.8rem;
  }
`
export const Subtitle = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`
