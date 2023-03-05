import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.aside`
  padding: 2.4rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ${media.lessThan('medium')`
    padding: 2.4rem 1.2rem;
    align-items: center;
    & span {
      display: none;
    }
  `}
`

export const Logo = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`

export const Navigation = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    & a {
      display: flex;
      align-items: center;
      gap: 2rem;
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.weight.bold};
      text-decoration: none;
      color: ${theme.colors.white};

      & svg {
        color: ${theme.colors.white};
        width: 3.2rem;
        height: 3.2rem;
      }
    }

    & .active {
      color: ${theme.colors.blue};

      & svg {
        color: ${theme.colors.blue};
      }
    }
  `}
`
