import styled from 'styled-components'

export const AnswerArea = styled.div`
  display: inline-block;
  width: 328px;
  height: fit-content;
  margin: 15px 15px 0px;
  text-align: left;
  border-bottom: 1px solid #5e5474;
  font-weight: normal;
  font-size: 14px;

  .contents {
    margin: 10px 0px;
    line-height: 130%;
  }
`

export const AnswerInfoBlock = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 12px;

  .time {
    display: inline-block;
    color: ${props => props.theme.colors.gray07};
    align-items: center;
    justify-content: center;
    padding-right: 120px;
    padding-top: 10px;
  }

  .likeButton {
    display: flex;
    width: 80px;
    height: 24px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.purpleGray};
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
  }
`
