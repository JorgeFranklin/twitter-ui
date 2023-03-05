import * as S from './styles'
import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Default = () => {
  return (
    <S.Wrapper>
      <Sidebar />
      <Outlet />
    </S.Wrapper>
  )
}

export default Default
