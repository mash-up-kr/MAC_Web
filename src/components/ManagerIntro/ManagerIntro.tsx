/* External dependencies */
import React, { useCallback } from 'react'

/* Internal dependencies */
import SVGIcon from 'elements/SVGIcon'
import * as Styled from './ManagerIntro.styled'

function ManagerIntro() {
  const handleEscapeWebView = useCallback(() => {
    // @ts-ignore
    if (window && window.mac && window.mac.intro_close) {
      // @ts-ignore
      window.mac.intro_close()
    }
  }, [])

  return (
    <Styled.IntroContainer>
      <Styled.IntroHeader>
        <Styled.BackButton onClick={handleEscapeWebView}>
          <SVGIcon name="arrow-left" size={24} />
        </Styled.BackButton>
        제작자 정보
      </Styled.IntroHeader>
      <Styled.IntroSection>
        <Styled.IntroSectionHeader>Android 개발자</Styled.IntroSectionHeader>
        <Styled.IntroSectionItem>김유정</Styled.IntroSectionItem>
        <Styled.IntroSectionItem>박서희</Styled.IntroSectionItem>
        <Styled.IntroSectionItem>이진성</Styled.IntroSectionItem>
      </Styled.IntroSection>
      <Styled.IntroSection>
        <Styled.IntroSectionHeader>Web 개발자</Styled.IntroSectionHeader>
        <Styled.IntroSectionItem>박정후</Styled.IntroSectionItem>
        <Styled.IntroSectionItem>신초희</Styled.IntroSectionItem>
        <Styled.IntroSectionItem>윤대용</Styled.IntroSectionItem>
      </Styled.IntroSection>
      <Styled.IntroSection>
        <Styled.IntroSectionHeader>Backend 개발자</Styled.IntroSectionHeader>
        <Styled.IntroSectionItem>김선재</Styled.IntroSectionItem>
        <Styled.IntroSectionItem>엄신영</Styled.IntroSectionItem>
        <Styled.IntroSectionItem>조준형</Styled.IntroSectionItem>
      </Styled.IntroSection>
      <Styled.IntroSection>
        <Styled.IntroSectionHeader>UX/UI 개발자</Styled.IntroSectionHeader>
        <Styled.IntroSectionItem>고은이</Styled.IntroSectionItem>
        <Styled.IntroSectionItem>박준영</Styled.IntroSectionItem>
        <Styled.IntroSectionItem>조성윤</Styled.IntroSectionItem>
      </Styled.IntroSection>
    </Styled.IntroContainer>
  )
}

export default ManagerIntro
