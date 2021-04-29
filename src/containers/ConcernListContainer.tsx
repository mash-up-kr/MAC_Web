/* External dependencies */
import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* Internal dependencies */
import { getConcernList } from 'modules/reducers/concernReducer'
import * as concernSelector from 'modules/selectors/concernSelector'
import Category from 'constants/Category'
import Distance from 'constants/Distance'
import Emotion from 'constants/Emotion'
import ConcernList, { Value } from 'components/ConcernList'

export interface QueryProps {
  category?: Category
  distance: Distance
  emotion?: Emotion
}

function ConcernListContainer() {
  const dispatch = useDispatch()
  const concernList = useSelector(concernSelector.getConcernList)

  const [query, setQuery] = useState<QueryProps>({
    category: undefined,
    distance: Distance.D3,
    emotion: undefined,
  })

  const handleChangeValue = useCallback((key: string, value: Value) => {
    setQuery(query => ({
      ...query,
      [key]: value,
    }))
  }, [])

  useEffect(() => {
    dispatch(
      getConcernList({
        minKilometer: 0,
        maxKilometer: query.distance,
        category: query.category,
        emotion: query.emotion,
      }),
    )
  }, [dispatch, query])

  return (
    <ConcernList
      concernList={concernList}
      query={query}
      onChangeValue={handleChangeValue}
    />
  )
}

export default ConcernListContainer
