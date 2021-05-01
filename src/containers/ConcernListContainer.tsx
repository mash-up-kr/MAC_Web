/* External dependencies */
import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* Internal dependencies */
import { getConcernList } from 'modules/reducers/concernReducer'
import { setQuery, clearQuery } from 'modules/reducers/queryReducer'
import * as concernSelector from 'modules/selectors/concernSelector'
import * as querySelector from 'modules/selectors/querySelector'
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
  const query = useSelector(querySelector.getQuery)

  const handleChangeQuery = useCallback(
    (key: string, value: Value) => {
      dispatch(setQuery({ key, value }))
    },
    [dispatch],
  )

  const handleClearQuery = useCallback(() => {
    dispatch(clearQuery())
  }, [dispatch])

  useEffect(() => {
    dispatch(
      getConcernList({
        minKilometer: query.distance.value.minKilometer,
        maxKilometer: query.distance.value.maxKilometer,
        category: query.category,
        emotion: query.emotion,
      }),
    )
  }, [dispatch, query])

  return (
    <ConcernList
      concernList={concernList}
      query={query}
      onChangeQuery={handleChangeQuery}
      onClearQuery={handleClearQuery}
    />
  )
}

export default ConcernListContainer
