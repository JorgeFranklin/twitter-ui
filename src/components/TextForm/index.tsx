import { PaperPlaneRight } from 'phosphor-react'
import { useState } from 'react'
import Button from '../Button'
import * as S from './styles'

type TextFormProps = {
  type?: 'tweet' | 'answer'
  onTweet: (value: string) => void
}

const TextForm = ({ type = 'tweet', onTweet }: TextFormProps) => {
  const [value, setValue] = useState('')

  const handleHotKeySubmit = (e: React.KeyboardEvent) => {
    const hotkeyAsPressed = (e.ctrlKey || e.metaKey) && e.key === 'Enter'

    if (hotkeyAsPressed) {
      onTweet(value)
      setValue('')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onTweet(value)
    setValue('')
  }

  return (
    <S.Wrapper type={type}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tweet">
          <img
            src="https://avatars.githubusercontent.com/u/118635631?v=4"
            alt="your profile picture"
          />
          <textarea
            id="tweet"
            placeholder={
              type === 'tweet' ? `What's happening?` : 'Tweet your answer'
            }
            value={value}
            onKeyDown={handleHotKeySubmit}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>

        <Button icon={<PaperPlaneRight />} size="small" type="submit">
          {type === 'tweet' ? 'Tweet' : 'Answer'}
        </Button>
      </form>
    </S.Wrapper>
  )
}

export default TextForm
