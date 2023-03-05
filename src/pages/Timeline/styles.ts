import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border-left: 0.1rem solid ${theme.colors.darkGray};
    border-right: 0.1rem solid ${theme.colors.darkGray};
  `}
`

export const Content = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 7.2rem 15rem 1fr;
`

export const NewTweet = styled.div`
  ${({ theme }) => css`
    & form {
      display: flex;
      flex-direction: column;
      padding: 2.4rem 2rem;
      gap: 0.8rem;
    }

    & label {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      & img {
        width: 5.6rem;
        border-radius: 50%;
      }

      & textarea {
        width: 100%;
        background: none;
        font-size: ${theme.font.sizes.large};
        font-weight: ${theme.font.weight.medium};
        margin-top: 1.2rem;
        resize: none;
        border: none;
        color: ${theme.colors.gray};

        &::placeholder {
          color: ${theme.colors.gray};
        }

        &:focus {
          outline: none;
        }
      }
    }

    & button {
      margin-left: auto;
    }
  `}
`

export const Divider = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.darkGray};
    border-bottom: 1px solid ${theme.colors.darkGray};
    height: 1.2rem;
  `}
`

export const Tweets = styled.div``
