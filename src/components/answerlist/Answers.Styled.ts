import styled from 'styled-components'

export const AnswerBackground = styled.div<{ up: boolean }>`
  position: absolute;
  width: 360px;
  ${props => (props.up ? `height: 540px; margin-top: -495px;` : ``)}
  background-color: black;
  opacity: 0.5;
  z-index: 4;
`

export const AnswerDrawer = styled.div<{ up: boolean }>`
  position: relative;
  ${props => (props.up ? `margin-top: -340px;` : 'margin-top: 20px;')}
  width: 360px;
  background-color: ${props => props.theme.colors.darkPupple};
  border-radius: 32px 32px 0px 0px;
  padding-top: 10px;
  color: white;
  text-align: center;
  z-index: 5;
`
export const DrawerButton = styled.img<{ up: boolean }>`
  padding: 8px 150px 0;
  cursor: pointer;
  ${props =>
    props.up ? `transform:rotate(180deg); padding: 0px 150px 8px;` : ''};
`

export const AnswerList = styled.div<{ up: boolean }>`
  ${props =>
    props.up ? `height: 250px; overflow-y: scroll;` : 'height: 120px;'};
  ::-webkit-scrollbar {
    display: none;
  }
`
export const AnswerInput = styled.textarea`
  display: inline-block;
  width: 328px;
  height: 140px;
  resize: none;
  margin: 10px 15px 20px;
  background-color: transparent;
  border-radius: 4px;
  border-color: ${props => props.theme.colors.purpleGray};
  outline: 0;
  padding: 10px;
  font-weight: normal;
  font-size: 12px;
  color: white;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const AnswerInputButton = styled.button`
  width: 360px;
  height: 52px;
  color: white;
  background-color: ${props => props.theme.colors.point};
  align-items: center;
  justify-content: center;
  border: 0;
  outline: 0;
  cursor: pointer;
`
