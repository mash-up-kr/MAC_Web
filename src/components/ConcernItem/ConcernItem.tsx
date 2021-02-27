import React from 'react'

import * as Styled from './ConcernItem.styled'

interface ConcernItemProps {
  concern: any
}

function ConcernItem({ concern }: ConcernItemProps) {
  return (
    <Styled.ConcernWrapper>
      <Styled.CategoryWrapper>
        <Styled.CategoryImage src={concern.category.imageUrl} alt="" />
        <Styled.Category>{concern.category.name}</Styled.Category>
      </Styled.CategoryWrapper>
      <Styled.ContentWrapper>
        <Styled.Title>{concern.title}</Styled.Title>
        <Styled.Content>{concern.content}</Styled.Content>
        <Styled.CreatedAt>{concern.createdAt}</Styled.CreatedAt>
      </Styled.ContentWrapper>
    </Styled.ConcernWrapper>
  )
}

export default ConcernItem
