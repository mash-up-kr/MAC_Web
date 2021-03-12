import React from 'react'
import * as Styled from './Concern.styled'
import location from './../../assets/location.svg'
import share from './../../assets/share.svg'
import love from './../../assets/love.svg'
import heart from './../../assets/heart.svg'
import colors from './../../constants/colors'
const ConcernCard = () => {
  return (
    <Styled.ConcernCard>
      <Styled.TitleBox>
        <Styled.CategoryWrapper>
          <Styled.DistanceArea>
            <img src={location} alt="location icon" /> 15km
          </Styled.DistanceArea>
          <Styled.ShareArea>
            <img src={share} alt="location icon" />
          </Styled.ShareArea>
        </Styled.CategoryWrapper>
        <Styled.CategoryWrapper>
          <Styled.CategoryArea>
            <Styled.AnimalArea>
              <img src={love} alt="location icon" />
            </Styled.AnimalArea>
            <Styled.HashtagArea>
              <Styled.Hashtag background={colors.yellow}>
                # 연애고민
              </Styled.Hashtag>
              <Styled.Hashtag background={colors.green}># 기쁨</Styled.Hashtag>
            </Styled.HashtagArea>
            <Styled.Writer>소양이팀 작성</Styled.Writer>
          </Styled.CategoryArea>
        </Styled.CategoryWrapper>
        <Styled.Title>남자친구의 판도라 상자를 열었따!</Styled.Title>
      </Styled.TitleBox>
      <Styled.DividerArea>
        <Styled.Divider />
      </Styled.DividerArea>

      <Styled.ContentBox>
        <Styled.Content>
          남자친구와 만난지 3년이 되어갑니다. 그런데 며칠전 남자친구의 휴대폰을
          우연히 보게 되었어요... 평소 참 잘해주던 사람인데... 평소 참 잘해주던
          사람인데... 평소 참 잘해주던 사람인데... 평소 참 잘해주던 사람인데...
          평소 참 잘해주던 사람인데... 평소 참 잘해주던 사람인데... 평소 참
          잘해주던 사람인데...
        </Styled.Content>
        <Styled.LikeButton>
          <img src={heart} alt="location icon" />
          508
        </Styled.LikeButton>
      </Styled.ContentBox>
    </Styled.ConcernCard>
  )
}

export default ConcernCard
