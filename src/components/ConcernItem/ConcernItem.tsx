/* External dependencies */
import React from 'react'

/* Internal dependencies */
import Concern from 'models/Concern'
import { getConcernItemImageName } from 'utils/concernUtils'
import { getDateString } from 'utils/dateUtils'
import SVGIcon from 'elements/SVGIcon'
import * as Styled from './ConcernItem.styled'

interface ConcernItemProps {
  concern: Concern
}

function ConcernItem({ concern }: ConcernItemProps) {
  return (
    <Styled.ConcernWrapper to={`/concern/${concern.id}`}>
      <Styled.CategoryWrapper>
        <SVGIcon name={getConcernItemImageName(concern.category)} size={44} />
        <Styled.Category>{concern.category}</Styled.Category>
      </Styled.CategoryWrapper>
      <Styled.ContentWrapper>
        <Styled.TitleHeader>
          <Styled.Title>{concern.title}</Styled.Title>
          <Styled.CommentCount>
            답변 <span>{concern.commentCount}</span>
          </Styled.CommentCount>
        </Styled.TitleHeader>
        <Styled.Content>{concern.content}</Styled.Content>
        <Styled.CreatedAt>{getDateString(concern.createdAt)}</Styled.CreatedAt>
      </Styled.ContentWrapper>
    </Styled.ConcernWrapper>
  )
}

export default ConcernItem
