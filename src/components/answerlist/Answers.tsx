import React, { useState, useCallback } from 'react'
import AnswerItem from './AnswerItem'
import * as Styled from './Answers.Styled'
import { AnswerListProps } from 'types/Answer'
import arrow from './../../assets/arrow.svg'
import { updateLanguageServiceSourceFile } from 'typescript'

function Answers({ answers }: AnswerListProps) {
  const [up, setUp] = useState(false)
  const [answerList, setAnswerList] = useState(answers.slice(undefined, 1))

  const handleUpButton = () => {
    setUp(!up)
    if (up) setAnswerList(answerList.slice(undefined, 1))
    else setAnswerList(answers)
  }

  return (
    <>
      <Styled.AnswerBackground up={up} />
      <Styled.AnswerDrawer up={up}>
        <Styled.DrawerButton src={arrow} onClick={handleUpButton} up={up} />
        <Styled.AnswerList up={up}>
          {answerList.map(answer => (
            <AnswerItem key={answer.id} answer={answer} />
          ))}
        </Styled.AnswerList>
        {up ? <AnswerListLayout answers={answers} /> : null}
      </Styled.AnswerDrawer>
    </>
  )
}

export default Answers

const AnswerListLayout = ({ answers }: AnswerListProps) => (
  <div>
    <Styled.AnswerInput placeholder="당신의 답변은?" />
    <Styled.AnswerInputButton>작성완료</Styled.AnswerInputButton>
  </div>
)
