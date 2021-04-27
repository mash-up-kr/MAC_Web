/* External dependencies */
import Immutable from 'immutable'
import { takeLatest } from 'redux-saga/effects'

/* Internal dependencies */
import Concern, { ConcernAttrPOJO } from 'models/Concern'
import * as concernAPI from 'modules/apis/concernAPI'
import Category from 'constants/Category'
import Emotion from 'constants/Emotion'
import {
  AsyncActionTypes,
  actionCreator,
  createAsyncActionsAndSaga,
} from 'utils/reduxUtils'

type Action = AsyncActionTypes<typeof getConcernListAsyncActions>

interface State {
  concernList: Immutable.Map<number, Concern>
  isFetching: boolean
  hasSuccess: boolean
  hasError: boolean
}

export interface GetConcernListPayload {
  minKilometer: number
  maxKilometer: number
  category?: Category
  emotion?: Emotion
}

const GET_CONCERN_LIST = 'concern/GET_CONCERN_LIST' as const
const GET_CONCERN_LIST_FETCHING = 'concern/GET_CONCERN_LIST_FETCHING' as const
const GET_CONCERN_LIST_SUCCESS = 'concern/GET_CONCERN_LIST_SUCCESS' as const
const GET_CONCERN_LIST_ERROR = 'concern/GET_CONCERN_LIST_ERROR' as const

export const getConcernList = actionCreator<GetConcernListPayload>(
  GET_CONCERN_LIST,
  { usePromise: true },
)

const {
  asyncActions: getConcernListAsyncActions,
  asyncSaga: getConcernListSaga,
} = createAsyncActionsAndSaga(
  GET_CONCERN_LIST_FETCHING,
  GET_CONCERN_LIST_SUCCESS,
  GET_CONCERN_LIST_ERROR,
)<ReturnType<typeof getConcernList>, ConcernAttrPOJO[], any>(
  concernAPI.getConcernList,
)

export function* concernSaga() {
  yield takeLatest(GET_CONCERN_LIST, getConcernListSaga)
}

const initialState: State = {
  concernList: Immutable.Map(),
  isFetching: false,
  hasSuccess: false,
  hasError: false,
}

function conceruReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case GET_CONCERN_LIST_FETCHING: {
      return {
        ...state,
        concernList: state.concernList.clear(),
        isFetching: true,
        hasSuccess: false,
        hasError: false,
      }
    }
    case GET_CONCERN_LIST_SUCCESS: {
      return {
        ...state,
        concernList: state.concernList.withMutations(map => {
          action.payload.forEach((concern: ConcernAttrPOJO) => {
            map.set(concern.id, new Concern(concern))
          })
        }),
        isFetching: false,
        hasSuccess: true,
      }
    }
    case GET_CONCERN_LIST_ERROR: {
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

export default conceruReducer
