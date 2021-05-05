/* External dependencies */
import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

/* Internal dependencies */
import ConcernDetail from 'models/ConcernDetail'
import { getConcernItemImageName } from 'utils/concernUtils'
import colors from 'constants/colors'
import SVGIcon from 'elements/SVGIcon'
import * as Styled from './Concern.styled'

interface ConcernCardProps {
  concernDetail: ConcernDetail
  onClickLike: () => void
}

const ConcernCard = ({ concernDetail, onClickLike }: ConcernCardProps) => {
  const history = useHistory()

  const handleClickBack = useCallback(() => {
    history.goBack()
  }, [history])

  return (
    <Styled.ConcernCardContainer>
      <Styled.ConcernCardHeader>
        <Styled.BackButton onClick={handleClickBack}>
          <SVGIcon name="arrow-left" size={24} />
        </Styled.BackButton>
        고민카드
      </Styled.ConcernCardHeader>
      <Styled.ConcernCard>
        <Styled.TitleBox>
          <Styled.CategoryWrapper>
            <Styled.DistanceArea>
              <SVGIcon name="location" size={24} />
              <Styled.Distance>
                {Math.round(concernDetail.distance)}km
              </Styled.Distance>
            </Styled.DistanceArea>
            <Styled.ShareArea>
              <SVGIcon name="share" size={24} />
            </Styled.ShareArea>
          </Styled.CategoryWrapper>
          <Styled.CategoryWrapper>
            <Styled.CategoryArea>
              <Styled.AnimalArea>
                <SVGIcon
                  name={getConcernItemImageName(concernDetail.category)}
                  size={88}
                />
              </Styled.AnimalArea>
              <Styled.HashtagArea>
                <Styled.Hashtag background={colors.yellow}>
                  # {concernDetail.category}
                </Styled.Hashtag>
                <Styled.Hashtag background={colors.green}>
                  # {concernDetail.emotion}
                </Styled.Hashtag>
              </Styled.HashtagArea>
              <Styled.Writer>
                <span>{concernDetail.user.nickname}</span>님 작성
              </Styled.Writer>
            </Styled.CategoryArea>
          </Styled.CategoryWrapper>
          <Styled.Title>{concernDetail.title}</Styled.Title>
        </Styled.TitleBox>
        <Styled.DividerArea>
          <Styled.Divider />
        </Styled.DividerArea>

        <Styled.ContentBox>
          <Styled.Content>{concernDetail.content}</Styled.Content>
          <Styled.LikeButton onClick={onClickLike}>
            <SVGIcon
              name={concernDetail.liked ? 'heart' : 'grayheart'}
              size={24}
            />
            {concernDetail.likeCount}
          </Styled.LikeButton>
        </Styled.ContentBox>
      </Styled.ConcernCard>
    </Styled.ConcernCardContainer>
  )
}

export default ConcernCard
