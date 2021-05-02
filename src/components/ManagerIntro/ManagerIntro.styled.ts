/* External dependencies */
import styled from 'styled-components'

export const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const IntroHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 46px;
  margin-bottom: 40px;
  color: white;
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 20px;
  font-weight: bold;
`

export const BackButton = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  width: 24px;
  height: 24px;
  transform: translateY(-50%);
  cursor: pointer;
`

export const IntroSection = styled.section`
  width: 100%;
  padding: 0 16px;
  margin-bottom: 24px;
  box-sizing: border-box;
  color: white;
`

export const IntroSectionHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 24px;
  margin-bottom: 8px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.darkGray2};
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.purpleGray};
  border-radius: 8px;
`

export const IntroSectionItem = styled.div`
  width: 100%;
  padding: 8px 0;
  font-size: 14px;
  text-align: center;
`
