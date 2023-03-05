import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.4rem 2rem;

    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.bold};

    color: ${theme.colors.lightGray};

    & svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${theme.colors.blue};
    }

    border-bottom: 0.1rem solid ${theme.colors.darkGray};
  `}
`
