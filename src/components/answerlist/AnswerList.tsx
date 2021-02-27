import React, { useState } from 'react'
import AnswerComp from './AnswerItem'
import styled from 'styled-components'
import { AnswerListProps } from 'types/Answer'

function AnswerList({ answers }: AnswerListProps) {
  return (
    <>
      <AnswerListLayout>
        {answers.map(answer => (
          <AnswerComp
            name={answer.name}
            contents={answer.contents}
            time={answer.time}
            likeNum={answer.likeNum}
          />
        ))}
        <AnswerInput placeholder="당신의 답변은?" />
      </AnswerListLayout>
      <AnswerInputButton>작성완료</AnswerInputButton>
    </>
  )
}

export default AnswerList

const AnswerListLayout = styled.div`
  position: relative;
  width: 360px;
  height: fit-content;
  margin-top: 20px;
  padding-top: 40px;
  background-color: #514184;
  border-radius: 32px 32px 0px 0px;
  color: white;
`
const AnswerInput = styled.textarea`
  display: inline-block;
  width: 328px;
  height: 140px;
  resize: none;
  margin: 10px 15px 20px;
  background-color: transparent;
  border-radius: 4px;
  border-color: #5e5474;
  outline: 0;
  ::placeholder {
    color: white;
    padding: 10px;
    font-weight: normal;
    font-size: 12px;
  }
  padding: 10px;
  font-weight: normal;
  font-size: 12px;
  color: white;
`
const AnswerInputButton = styled.button`
  width: 360px;
  height: 52px;
  color: white;
  background-color: #8567ff;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: 0;
  cursor: pointer;
`
