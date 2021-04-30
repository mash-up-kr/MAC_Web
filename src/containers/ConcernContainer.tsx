/* External dependencies */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* Internal dependencies */
import { getConcernDetail } from 'modules/reducers/concernReducer'
import { getAnswerList } from 'modules/reducers/answerReducer'
import * as concernSelector from 'modules/selectors/concernSelector'
import * as answerSelector from 'modules/selectors/answerSelector'
import ConcernCard from 'components/concern/ConcernCard'
import AnswerList from 'components/AnswerList'

interface ConcernContainerProps {
  concernId: string
}

function ConcernContainer({ concernId }: ConcernContainerProps) {
  const dispatch = useDispatch()
  const concernDetail = useSelector(concernSelector.getConcernDetail)
  const answerList = useSelector(answerSelector.getAnswerList)

  useEffect(() => {
    dispatch(getConcernDetail({ concernId }))
  }, [concernId, dispatch])

  useEffect(() => {
    dispatch(getAnswerList({ concernId }))
  }, [concernId, dispatch])

  return (
    <>
      <ConcernCard concernDetail={concernDetail} />
      <AnswerList answerList={answerList} />
    </>
  )
}

export default ConcernContainer
