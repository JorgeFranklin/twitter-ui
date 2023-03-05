import { Pencil } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = {
  icon?: React.ReactElement
  size?: 'small' | 'medium'
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ icon, size = 'medium', children }: ButtonProps) => (
  <S.Wrapper size={size}>
    {icon}
    <span>{children}</span>
  </S.Wrapper>
)

export default Button
