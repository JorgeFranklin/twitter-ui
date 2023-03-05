import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

const wrapperModifiers = {
  tweet: () => css`
    & form {
      flex-direction: column;
      justify-content: center;
    }
  `,
  answer: (theme: DefaultTheme) => css`
    border-bottom: 1px solid ${theme.colors.darkGray};
    & form {
      flex-direction: row;
      align-items: center;
      gap: 0.8rem;
    }
  `,
}

type WrapperProps = {
  type?: 'tweet' | 'answer'
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, type }) => css`
    & form {
      display: flex;
      padding: 2.4rem 2rem;
    }

    & label {
      display: flex;
      align-items: center;
      flex: 1;
      gap: 1.2rem;

      & img {
        width: 5.6rem;
        border-radius: 50%;
      }

      & textarea {
        flex: 1;
        background: none;
        font-size: ${theme.font.sizes.large};
        font-weight: ${theme.font.weight.medium};
        margin-top: 2rem;
        resize: none;
        border: none;
        color: ${theme.colors.lightGray};

        &::placeholder {
          color: ${theme.colors.gray};
        }

        &:focus {
          outline: none;
        }

        ${media.lessThan('medium')`
          font-size: ${theme.font.sizes.medium};
        `}
      }

      ${media.lessThan('medium')`
        & img {
          width: 3.6rem;
        }
      `}
    }

    & button {
      margin-left: auto;
    }

    ${!!type && wrapperModifiers[type](theme)}
  `}
`
