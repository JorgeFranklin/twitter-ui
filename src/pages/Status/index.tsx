import { CaretCircleDown } from 'phosphor-react'
import { useState } from 'react'
import Header from '../../components/Header'
import TextForm from '../../components/TextForm'
import Tweet from '../../components/Tweet'
import * as S from './styles'

const Status = () => {
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz total sentido!',
    'Parabéns',
  ])

  const onTweet = (value: string) => {
    setAnswers((answers) => [value, ...answers])
  }

  return (
    <S.Wrapper>
      <Header title="Tweet" icon={<CaretCircleDown />} />
      <Tweet
        content={`
        Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: 

        ✅ npm start: De 32s para 400ms (sim, demorava 30s) 
        ✅ npm build: De 120s para 22s

        Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥
        `}
      />
      <TextForm type="answer" onTweet={onTweet} />

      {answers.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </S.Wrapper>
  )
}

export default Status
