import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary' | 'heading'
export type RibbonSizes = 'normal' | 'small'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

const Ribbon = ({
  children,
  color = 'heading',
  size = 'normal'
}: RibbonProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Ribbon
