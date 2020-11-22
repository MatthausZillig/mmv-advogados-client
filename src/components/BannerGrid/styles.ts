import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    height: 70rem;
    grid-template-areas:
      'one two two'
      'one two two'
      'one tree four'
      'one five six';
    column-gap: ${theme.spacings.small};
    row-gap: ${theme.spacings.small};
  `}
`
type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 100%;
    grid-area: one;
    background-color: ${theme.colors.lightGray};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
  `}
`

export const Image2 = styled(Image)`
  grid-area: two;
`

export const Image3 = styled(Image)`
  grid-area: tree;
`

export const Image4 = styled(Image)`
  grid-area: four;
`

export const Image5 = styled(Image)`
  grid-area: five;
`

export const Image6 = styled(Image)`
  grid-area: six;
`
