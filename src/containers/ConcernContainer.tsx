/* External dependencies */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* Internal dependencies */
import { getConcernDetail } from 'modules/reducers/concernReducer'
import * as concernSelector from 'modules/selectors/concernSelector'
import ConcernCard from 'components/concern/ConcernCard'

interface ConcernContainerProps {
  concernId: string
}

function ConcernContainer({ concernId }: ConcernContainerProps) {
  const dispatch = useDispatch()
  const concernDetail = useSelector(concernSelector.getConcernDetail)

  useEffect(() => {
    dispatch(getConcernDetail({ concernId }))
  }, [concernId, dispatch])

  return <ConcernCard concernDetail={concernDetail} />
}

export default ConcernContainer
