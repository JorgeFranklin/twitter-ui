import * as S from './styles'

type HeaderProps = {
  title: string
  icon?: React.ReactNode
}

const Header = ({ icon, title }: HeaderProps) => {
  return (
    <S.Wrapper>
      {title} {icon}
    </S.Wrapper>
  )
}

export default Header
