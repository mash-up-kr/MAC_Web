import React, { useMemo } from 'react'

import ConcernItem from 'components/ConcernItem'
import * as Styled from './ConcernList.styled'

interface ConcernListProps {
  concernList: any
}

function ConcernList({ concernList }: ConcernListProps) {
  const concerns = useMemo(() => {
    return concernList.map(concern => (
      <ConcernItem key={concern.id} concern={concern} />
    ))
  }, [concernList])

  return <Styled.ConcernListWrapper>{concerns}</Styled.ConcernListWrapper>
}

export default ConcernList
