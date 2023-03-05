import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    padding: 1.05rem 2.4rem;
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    padding: 1.6rem 2.4rem;
    font-size: ${theme.font.sizes.large};
  `,
}

export type WrapperProps = {
  size?: 'medium' | 'small'
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.6rem 2.4rem;
    border: none;
    border-radius: 99.9rem;
    transition: filter 0.3s;

    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};
    background-color: ${theme.colors.blue};

    &:hover {
      filter: brightness(0.8);
    }

    & svg {
      display: none;
    }

    ${media.lessThan('medium')`
      & svg {
        display: block;
      }
      & span {
        display: none;
      }
    `}

    ${!!size && wrapperModifiers[size](theme)}
  `}
`
