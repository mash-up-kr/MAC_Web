import React from 'react'
import styled from 'styled-components'
import { Answer } from 'types/Answer'

function AnswerComp({ name, contents, time, likeNum }: Answer) {
  return (
    <>
      <AnswerBlock>
        <div className="userName">{name}</div>
        <div className="contents">{contents}</div>
        <AnswerInfoBlock>
          <div className="time">{time}</div>
          <div className="likeButton">{likeNum}</div>
        </AnswerInfoBlock>
      </AnswerBlock>
    </>
  )
}

export default AnswerComp

const AnswerBlock = styled.div`
  display: inline-block;
  width: 328px;
  height: fit-content;
  margin: 15px 15px 0px;
  text-align: left;
  border-bottom: 1px solid #5e5474;

  .userName {
    font-weight: 400;
  }
  .contents {
    display: inline-block;
    width: 328px;
    height: fit-content;
    margin: 10px 0px;
    line-height: 130%;
    font-size: 11pt;
  }
`
const AnswerInfoBlock = styled.div`
  display: flex;
  margin-bottom: 10px;

  .time {
    display: inline-block;
    color: #716d74;
    align-items: center;
    justify-content: center;
    padding-right: 80px;
    padding-top: 10px;
  }

  .likeButton {
    display: felx;
    width: 80px;
    height: 24px;
    align-items: center;
    justify-content: center;
    background-color: #5e5474;
    border-radius: 5px;
    text-align: center;
  }
`
