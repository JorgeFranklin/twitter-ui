import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 100rem;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 30rem 1fr;

  ${media.lessThan('medium')`
    grid-template-columns: 8rem 1fr;
  `}
`
