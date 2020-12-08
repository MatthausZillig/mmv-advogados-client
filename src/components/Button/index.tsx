import * as S from './styles'
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  withBorder?: boolean
  icon?: JSX.Element
  as?: React.ElementType
  onClick?: () => void
} & ButtonTypes

const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper fullWidth={fullWidth} size={size} hasIcon={!!icon} {...props}>
    {!!children && <span>{children}</span>}
    {!!icon && icon}
  </S.Wrapper>
)

export default Button
