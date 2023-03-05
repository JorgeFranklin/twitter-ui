import twitterLogo from '/assets/imgs/logo-twitter.svg'

import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from 'phosphor-react'

import * as S from './styles'
import Button from '../Button'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <S.Wrapper>
      <S.Logo src={twitterLogo} alt="website logo, a blue bird." />

      <S.Navigation>
        <NavLink to="/">
          <House />
          <span>Home</span>
        </NavLink>
        <NavLink to="/explore">
          <Hash weight="fill" />
          <span>Explore</span>
        </NavLink>
        <NavLink to="/notifications">
          <Bell />
          <span>Notifications</span>
        </NavLink>
        <NavLink to="/messages">
          <Envelope />
          <span>Messages</span>
        </NavLink>
        <NavLink to="/bookmarks">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </NavLink>
        <NavLink to="/lists">
          <FileText />
          <span>Lists</span>
        </NavLink>
        <NavLink to="/profile">
          <User />
          <span>Profile</span>
        </NavLink>
        <NavLink to="/more">
          <DotsThreeCircle />
          <span>More</span>
        </NavLink>
      </S.Navigation>

      <Button icon={<Pencil />}>Tweet</Button>
    </S.Wrapper>
  )
}

export default Sidebar
