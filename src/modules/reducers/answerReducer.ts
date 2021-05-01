/* External dependencies */
import Immutable from 'immutable'
import { takeLatest } from 'redux-saga/effects'

/* Internal dependencies */
import Answer, { AnswerPOJO } from 'models/Answer'
import * as answerAPI from 'modules/apis/answerAPI'
import {
  AsyncActionTypes,
  actionCreator,
  createAsyncActionsAndSaga,
} from 'utils/reduxUtils'

type Action =
  | AsyncActionTypes<typeof getAnswerListAsyncActions>
  | AsyncActionTypes<typeof postAnswerLikeAsyncActions>
  | AsyncActionTypes<typeof deleteAnswerLikeAsyncActions>

interface State {
  asnwerList: Immutable.Map<number, Answer>
  isFetching: boolean
  hasSuccess: boolean
  hasError: boolean
}

export interface GetAnswerListPayload {
  concernId: string
}

export interface PostAnswerLikePayload {
  answerId: number
}

export interface DeleteAnswerLikePayload {
  answerId: number
}

const GET_ANSWER_LIST = 'answer/GET_ANSWER_LIST' as const
const GET_ANSWER_LIST_FETCHING = 'answer/GET_ANSWER_LIST_FETCHING' as const
const GET_ANSWER_LIST_SUCCESS = 'answer/GET_ANSWER_LIST_SUCCESS' as const
const GET_ANSWER_LIST_ERROR = 'answer/GET_ANSWER_LIST_ERROR' as const

const POST_ANSWER_LIKE = 'answer/POST_ANSWER_LIKE' as const
const POST_ANSWER_LIKE_FETCHING = 'answer/POST_ANSWER_LIKE_FETCHING' as const
const POST_ANSWER_LIKE_SUCCESS = 'answer/POST_ANSWER_LIKE_SUCCESS' as const
const POST_ANSWER_LIKE_ERROR = 'answer/POST_ANSWER_LIKE_ERROR' as const

const DELETE_ANSWER_LIKE = 'answer/DELETE_ANSWER_LIKE' as const
const DELETE_ANSWER_LIKE_FETCHING = 'answer/DELETE_ANSWER_LIKE_FETCHING' as const
const DELETE_ANSWER_LIKE_SUCCESS = 'answer/DELETE_ANSWER_LIKE_SUCCESS' as const
const DELETE_ANSWER_LIKE_ERROR = 'answer/DELETE_ANSWER_LIKE_ERROR' as const

export const getAnswerList = actionCreator<GetAnswerListPayload>(
  GET_ANSWER_LIST,
  { usePromise: true },
)

export const postAnswerLike = actionCreator<PostAnswerLikePayload>(
  POST_ANSWER_LIKE,
  { usePromise: true },
)

export const deleteAnswerLike = actionCreator<DeleteAnswerLikePayload>(
  DELETE_ANSWER_LIKE,
  { usePromise: true },
)

const {
  asyncActions: getAnswerListAsyncActions,
  asyncSaga: getAnswerListSaga,
} = createAsyncActionsAndSaga(
  GET_ANSWER_LIST_FETCHING,
  GET_ANSWER_LIST_SUCCESS,
  GET_ANSWER_LIST_ERROR,
)<ReturnType<typeof getAnswerList>, AnswerPOJO[], any>(answerAPI.getAnswerList)

const {
  asyncActions: postAnswerLikeAsyncActions,
  asyncSaga: postAnswerLikeSaga,
} = createAsyncActionsAndSaga(
  POST_ANSWER_LIKE_FETCHING,
  POST_ANSWER_LIKE_SUCCESS,
  POST_ANSWER_LIKE_ERROR,
)<ReturnType<typeof postAnswerLike>, any, any>(answerAPI.postAnswerLike)

const {
  asyncActions: deleteAnswerLikeAsyncActions,
  asyncSaga: deleteAnswerLikeSaga,
} = createAsyncActionsAndSaga(
  DELETE_ANSWER_LIKE_FETCHING,
  DELETE_ANSWER_LIKE_SUCCESS,
  DELETE_ANSWER_LIKE_ERROR,
)<ReturnType<typeof deleteAnswerLike>, any, any>(answerAPI.deleteAnswerLike)

export function* answerSaga() {
  yield takeLatest(GET_ANSWER_LIST, getAnswerListSaga)
  yield takeLatest(POST_ANSWER_LIKE, postAnswerLikeSaga)
  yield takeLatest(DELETE_ANSWER_LIKE, deleteAnswerLikeSaga)
}

const initialState: State = {
  asnwerList: Immutable.Map(),
  isFetching: false,
  hasSuccess: false,
  hasError: false,
}

function answerReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case GET_ANSWER_LIST_FETCHING: {
      return {
        ...state,
        isFetching: true,
        hasSuccess: false,
        hasError: false,
      }
    }
    case GET_ANSWER_LIST_SUCCESS: {
      return {
        ...state,
        asnwerList: state.asnwerList.withMutations(map => {
          action.payload.forEach((answer: AnswerPOJO) => {
            map.set(answer.id, new Answer(answer))
          })
        }),
        isFetching: false,
        hasSuccess: true,
      }
    }
    case GET_ANSWER_LIST_ERROR: {
      return {
        ...state,
        isFetching: false,
        hasError: true,
      }
    }
    default:
      return state
  }
}

export default answerReducer
