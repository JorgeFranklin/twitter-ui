import { Sparkle } from 'phosphor-react'
import * as S from './styles'
import TextForm from '../../components/TextForm'
import Tweet from '../../components/Tweet'
import Header from '../../components/Header'
import { useState } from 'react'

const Timeline = () => {
  const [tweets, setTweet] = useState([
    'Meu Primeiro Tweet',
    'Aicalica 🔥🔥🔥🔥 !!!',
    'Tomale pai é genio',
  ])

  const onTweet = (value: string) => {
    setTweet((tweets) => [value, ...tweets])
  }

  return (
    <S.Wrapper>
      <S.Content>
        <Header title="Home" icon={<Sparkle />} />

        <TextForm type="tweet" onTweet={onTweet} />

        <S.Divider />

        <S.Tweets>
          {tweets.map((tweet) => (
            <Tweet key={tweet} content={tweet} />
          ))}
        </S.Tweets>
      </S.Content>
    </S.Wrapper>
  )
}

export default Timeline
