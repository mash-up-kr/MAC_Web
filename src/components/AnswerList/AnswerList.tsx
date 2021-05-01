/* External dependencies */
import React, { useState, useCallback } from 'react'
import Immutable from 'immutable'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import Answer from 'models/Answer'
import { getDateString } from 'utils/dateUtils'
import SVGIcon from 'elements/SVGIcon'
import * as Styled from './AnswerList.styled'

interface AnswerListProps {
  answerList: Immutable.List<Answer>
  onClickLike: (answerId: number, liked: boolean) => void
  onCreateAnswer: (content: string) => void
}

function AnswerList({
  answerList,
  onClickLike,
  onCreateAnswer,
}: AnswerListProps) {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState('')

  const handleToggle = useCallback(() => {
    setShow(prev => !prev)
  }, [])

  const handleClickLike = useCallback(
    (answerId: number, liked: boolean) => {
      onClickLike(answerId, liked)
    },
    [onClickLike],
  )

  const handleChangeValue = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target
      setValue(value)
    },
    [],
  )

  const handleCreateAnswer = useCallback(() => {
    if (!isEmpty(value)) {
      onCreateAnswer(value)
      setValue('')
    }
  }, [onCreateAnswer, value])

  return (
    <>
      <Styled.AnswerListBackground show={show} />
      <Styled.AnswerListContainer show={show}>
        <Styled.ToggleButton show={show} onClick={handleToggle}>
          <SVGIcon name="arrow" size={20} />
        </Styled.ToggleButton>
        <Styled.AnswerList>
          {answerList.map(answer => (
            <Styled.Answer key={answer.id}>
              <Styled.Name>{answer.user.nickname}</Styled.Name>
              <Styled.Content>{answer.content}</Styled.Content>
              <Styled.Date>{getDateString(answer.createdAt)}</Styled.Date>
              <Styled.LikeButton
                onClick={() => handleClickLike(answer.id, answer.liked)}
              >
                <SVGIcon
                  name={answer.liked ? 'heart' : 'grayheart'}
                  size={24}
                />
                {answer.likeCount}
              </Styled.LikeButton>
            </Styled.Answer>
          ))}
          <Styled.TextArea
            placeholder="당신의 답변은?"
            value={value}
            onChange={handleChangeValue}
          />
        </Styled.AnswerList>
        <Styled.SubmitButton onClick={handleCreateAnswer}>
          작성 완료
        </Styled.SubmitButton>
      </Styled.AnswerListContainer>
    </>
  )
}

export default AnswerList
