/* External dependencies */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* Internal dependencies */
import { getConcernList } from 'modules/reducers/concernReducer'
import * as concernSelector from 'modules/selectors/concernSelector'
import ConcernList from 'components/ConcernList'

function ConcernListContainer() {
  const dispatch = useDispatch()
  const concernList = useSelector(concernSelector.getConcernList)

  useEffect(() => {
    dispatch(
      getConcernList({
        /* 임시 데이터 */
        minKilometer: 0,
        maxKilometer: 0,
      }),
    )
  }, [dispatch])

  return <ConcernList concernList={concernList} />
}

export default ConcernListContainer
