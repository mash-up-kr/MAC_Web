/* External dependencies */
import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* Internal dependencies */
import {
  getConcernDetail,
  postConcerkLike,
  deleteConcerkLike,
} from 'modules/reducers/concernReducer'
import {
  getAnswerList,
  postAnswerLike,
  deleteAnswerLike,
} from 'modules/reducers/answerReducer'
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

  const handleClickConcernLike = useCallback(() => {
    const actionCreator = concernDetail.liked
      ? deleteConcerkLike
      : postConcerkLike

    dispatch(actionCreator({ concernId })).promise?.then(() => {
      dispatch(getConcernDetail({ concernId }))
    })
  }, [concernDetail.liked, concernId, dispatch])

  const handleClickAnswerLike = useCallback(
    (answerId: number, liked: boolean) => {
      const actionCreator = liked ? deleteAnswerLike : postAnswerLike

      dispatch(actionCreator({ answerId })).promise?.then(() => {
        dispatch(getAnswerList({ concernId }))
      })
    },
    [concernId, dispatch],
  )

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
        onClickLike={handleClickConcernLike}
      />
      <AnswerList answerList={answerList} onClickLike={handleClickAnswerLike} />
    </>
  )
}

export default ConcernContainer
