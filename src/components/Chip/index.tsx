import * as S from './styles'

export type ChipProps = {
  children?: React.ReactNode
}

const Chip = ({ children }: ChipProps) => (
  <S.Wrapper data-testid="chip">{children}</S.Wrapper>
)

export default Chip
