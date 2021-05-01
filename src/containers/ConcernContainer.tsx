/* External dependencies */
import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* Internal dependencies */
import {
  getConcernDetail,
  postConcerkLike,
  deleteConcerkLike,
} from 'modules/reducers/concernReducer'
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

  const handleClickLike = useCallback(() => {
    const actionCreator = concernDetail.liked
      ? deleteConcerkLike
      : postConcerkLike

    dispatch(actionCreator({ concernId })).promise?.then(() => {
      dispatch(getConcernDetail({ concernId }))
    })
  }, [concernDetail.liked, concernId, dispatch])

  useEffect(() => {
    dispatch(getConcernDetail({ concernId }))
  }, [concernId, dispatch])

  useEffect(() => {
    dispatch(getAnswerList({ concernId }))
  }, [concernId, dispatch])

  return (
    <>
      <ConcernCard
        concernDetail={concernDetail}
        onClickLike={handleClickLike}
      />
      <AnswerList answerList={answerList} />
    </>
  )
}

export default ConcernContainer
