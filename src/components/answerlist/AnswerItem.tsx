import React, { useState } from 'react'
import * as Styled from './AnswerItem.Styled'
import { Answer, AnswerListProps } from 'types/Answer'
import heart from './../../assets/heart.svg'

interface AnswerItemProps {
  answer: any
}

function AnswerItem({ answer }: AnswerItemProps) {
  const [like, setLike] = useState<number>(answer.likeNum)
  const addLike = () => setLike(like + 1)

  return (
    <Styled.AnswerArea>
      <div>{answer.name}</div>
      <div className="contents">{answer.contents}</div>
      <Styled.AnswerInfoBlock>
        <div className="time">{answer.time}</div>
        <div className="likeButton" onClick={addLike}>
          <img src={heart} alt="heart icon" />
          {like}
        </div>
      </Styled.AnswerInfoBlock>
    </Styled.AnswerArea>
  )
}

export default AnswerItem
