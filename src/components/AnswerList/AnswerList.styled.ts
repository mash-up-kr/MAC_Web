/* External dependencies */
import styled, { css } from 'styled-components'

interface AnswerListBackgroundProps {
  show: boolean
}

interface AnswerListContainerProps {
  show: boolean
}

interface ToggleButtonProps {
  show: boolean
}

export const AnswerListBackground = styled.div<AnswerListBackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  background-color: black;
  transition: opacity 0.3s;

  ${({ show }) =>
    show &&
    css`
      visibility: visible;
      opacity: 0.5;
    `}
`

export const AnswerListContainer = styled.div<AnswerListContainerProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: calc(100% - 132px);
  background-color: #423374;
  transform: translateY(calc(100% - 30px));
  transition: transform 0.3s;
  border-radius: 30px 30px 0 0;

  ${({ show }) =>
    show &&
    css`
      transform: translateY(0);
    `}
`

export const ToggleButton = styled.div<ToggleButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  transform: rotate(-180deg);
  cursor: pointer;

  ${({ show }) =>
    show &&
    css`
      transform: rotate(0);
    `}
`

export const Answer = styled.div`
  width: 100%;
  padding: 10px 0;
  color: white;
`

export const AnswerList = styled.div`
  width: 100%;
  padding: 20px 16px;

  ${Answer} + ${Answer} {
    border-top: 1px solid ${({ theme }) => theme.colors.darkGray1};
  }
`

export const Name = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
`

export const Content = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
`

export const Date = styled.p`
  color: #716d74;
  font-size: 12px;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 140px;
  padding: 12px 10px;
  margin-top: 14px;
  box-sizing: border-box;
  background-color: transparent;
  resize: none;
  outline: none;
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.purpleGray};
  border-radius: 4px;
`
