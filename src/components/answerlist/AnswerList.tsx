import React, { useState } from 'react'
import AnswerComp from './AnswerComp'
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
      </AnswerListLayout>
    </>
  )
}

export default AnswerList

const AnswerListLayout = styled.div`
  position: relative;
  width: 360px;
  height: 455px;
  background-color: #514184;
  border-radius: 16px 16px 0px 0px;
  color: white;
`
