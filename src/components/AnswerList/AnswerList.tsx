/* External dependencies */
import React, { useState, useCallback } from 'react'
import Immutable from 'immutable'

/* Internal dependencies */
import Answer from 'models/Answer'
import { getDateString } from 'utils/dateUtils'
import SVGIcon from 'elements/SVGIcon'
import * as Styled from './AnswerList.styled'

interface AnswerListProps {
  answerList: Immutable.List<Answer>
}

function AnswerList({ answerList }: AnswerListProps) {
  const [show, setShow] = useState(true)
  const [value, setvalue] = useState('')

  const handleToggle = useCallback(() => {
    setShow(prev => !prev)
  }, [])

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
            </Styled.Answer>
          ))}
          <Styled.TextArea placeholder="당신의 답변은?" />
        </Styled.AnswerList>
      </Styled.AnswerListContainer>
    </>
  )
}

export default AnswerList
