import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import * as S from './styles'

type TweetProps = {
  content: string
}

const Tweet = ({ content }: TweetProps) => (
  <Link to="/status">
    <S.Wrapper>
      <S.UserImage src="https://github.com/JorgeFranklin.png" />
      <S.Content>
        <S.Header>
          <strong>Jorge Franklin</strong>
          <span>@jf</span>
        </S.Header>

        <p>{content}</p>

        <S.Footer>
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </S.Footer>
      </S.Content>
    </S.Wrapper>
  </Link>
)

export default Tweet
