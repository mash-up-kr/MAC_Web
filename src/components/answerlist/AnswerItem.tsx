import React, { useState } from 'react'
import * as Styled from './AnswerItem.Styled'
import { Answer, AnswerListProps } from 'types/Answer'
import redheart from './../../assets/heart.svg'
import grayheart from './../../assets/grayheart.svg'

interface AnswerItemProps {
  answer: any
}

function AnswerItem({ answer }: AnswerItemProps) {
  const [likeNum, setLikeNum] = useState(answer.likeNum)
  const [like, setLike] = useState(answer.like)
  const [heart, setHeart] = useState(answer.like ? redheart : grayheart)

  const addLike = () => {
    setLikeNum(like ? likeNum - 1 : likeNum + 1)
    setLike(!like)
    setHeart(like ? grayheart : redheart)
    console.log(like)
  }

  return (
    <Styled.AnswerArea>
      <div>{answer.name}</div>
      <div className="contents">{answer.contents}</div>
      <Styled.AnswerInfoBlock>
        <div className="time">{answer.time}</div>
        <div className="likeButton" onClick={addLike}>
          <img src={heart} alt="heart icon" onClick={addLike} />
          {likeNum}
        </div>
      </Styled.AnswerInfoBlock>
    </Styled.AnswerArea>
  )
}

export default AnswerItem
