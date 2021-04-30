/* External dependencies */
import React, { useMemo } from 'react'

/* Internal dependencies */
import Concern from 'models/Concern'
import { getConcernItemImageName } from 'utils/concernUtils'
import SVGIcon from 'elements/SVGIcon'
import * as Styled from './ConcernItem.styled'

interface ConcernItemProps {
  concern: Concern
}

function ConcernItem({ concern }: ConcernItemProps) {
  const { year, month, date, prefix, hour, minute } = useMemo(() => {
    const createdAt = new Date(concern.createdAt)

    const year = createdAt.getFullYear()
    const month = createdAt.getMonth() + 1
    const date = createdAt.getDate()
    const prefix = createdAt.getHours() >= 12 ? '오후' : '오전'
    const minute = (() => {
      const receivedMinute = createdAt.getMinutes()

      if (receivedMinute < 10) {
        return `0${receivedMinute}`
      }
      return receivedMinute
    })()
    const hour = (() => {
      const receivedHour = createdAt.getHours() % 12

      if (receivedHour < 10) {
        return `0${receivedHour}`
      }
      return receivedHour
    })()

    return {
      year,
      month,
      date,
      prefix,
      hour,
      minute,
    }
  }, [concern.createdAt])

  return (
    <Styled.ConcernWrapper>
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
        <Styled.CreatedAt>{`${year}.${month}.${date} ${prefix} ${hour}:${minute}`}</Styled.CreatedAt>
      </Styled.ContentWrapper>
    </Styled.ConcernWrapper>
  )
}

export default ConcernItem
