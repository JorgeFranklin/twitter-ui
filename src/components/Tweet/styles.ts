import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 5.6rem 1fr;
    padding: 2.4rem 2rem;
    gap: 1.2rem;
    border-bottom: 1px solid ${theme.colors.darkGray};
    text-decoration: none;

    ${media.lessThan('medium')`
      grid-template-columns: 3.6rem 1fr;
    `};
  `}
`

export const UserImage = styled.img`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  ${media.lessThan('medium')`
    width: 3.6rem;
    height: 3.6rem;
  `};
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;

    & p {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.lightGray};
      overflow-wrap: anywhere;
      line-height: 1.25;
      ${media.lessThan('medium')`
        width: 23rem;
      `}
    }
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 0.2rem 0 0 0;
    gap: 0.4rem;

    & strong {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.white};
    }

    & span {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.gray};
    }
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 4.8rem;
    margin-top: 1.2rem;

    & button {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      background: transparent;
      border: 0;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.gray};
      transition: color 0.5s;

      & svg {
        width: 2.1rem;
        height: 2.1rem;
      }

      &:hover {
        color: ${theme.colors.blue};
      }
    }
  `}
`
