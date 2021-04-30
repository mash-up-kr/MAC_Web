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

type Action = AsyncActionTypes<typeof getAnswerListAsyncActions>

interface State {
  asnwerList: Immutable.Map<number, Answer>
  isFetching: boolean
  hasSuccess: boolean
  hasError: boolean
}

export interface GetAnswerListPayload {
  concernId: string
}

const GET_ANSWER_LIST = 'answer/GET_ANSWER_LIST' as const
const GET_ANSWER_LIST_FETCHING = 'answer/GET_ANSWER_LIST_FETCHING' as const
const GET_ANSWER_LIST_SUCCESS = 'answer/GET_ANSWER_LIST_SUCCESS' as const
const GET_ANSWER_LIST_ERROR = 'answer/GET_ANSWER_LIST_ERROR' as const

export const getAnswerList = actionCreator<GetAnswerListPayload>(
  GET_ANSWER_LIST,
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

export function* answerSaga() {
  yield takeLatest(GET_ANSWER_LIST, getAnswerListSaga)
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
        asnwerList: state.asnwerList.clear(),
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
