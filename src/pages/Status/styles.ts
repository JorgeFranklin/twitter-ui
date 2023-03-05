import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border-left: 0.1rem solid ${theme.colors.darkGray};
    border-right: 0.1rem solid ${theme.colors.darkGray};
  `}
`
