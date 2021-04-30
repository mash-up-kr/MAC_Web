/* External dependencies */
import Immutable from 'immutable'
import { takeLatest } from 'redux-saga/effects'

/* Internal dependencies */
import Concern, { ConcernAttrPOJO } from 'models/Concern'
import ConcernDetail, { ConcernDetailAttrPOJO } from 'models/ConcernDetail'
import * as concernAPI from 'modules/apis/concernAPI'
import Category from 'constants/Category'
import Emotion from 'constants/Emotion'
import {
  AsyncActionTypes,
  actionCreator,
  createAsyncActionsAndSaga,
} from 'utils/reduxUtils'

type Action =
  | AsyncActionTypes<typeof getConcernListAsyncActions>
  | AsyncActionTypes<typeof getConcernDetailAsyncActions>

interface State {
  concernList: Immutable.Map<number, Concern>
  concernDefail: ConcernDetail
  isConcernListFetching: boolean
  hasConcernListSuccess: boolean
  hasConcernListError: boolean
  isConcernDetailFetching: boolean
  hasConcernDetailSuccess: boolean
  hasConcernDetailError: boolean
}

export interface GetConcernListPayload {
  minKilometer: number
  maxKilometer: number
  category?: Category
  emotion?: Emotion
}

export interface GetConcernDetailPayload {
  concernId: string
}

const GET_CONCERN_LIST = 'concern/GET_CONCERN_LIST' as const
const GET_CONCERN_LIST_FETCHING = 'concern/GET_CONCERN_LIST_FETCHING' as const
const GET_CONCERN_LIST_SUCCESS = 'concern/GET_CONCERN_LIST_SUCCESS' as const
const GET_CONCERN_LIST_ERROR = 'concern/GET_CONCERN_LIST_ERROR' as const

const GET_CONCERN_DETAIL = 'concern/GET_CONCERN_DETAIL' as const
const GET_CONCERN_DETAIL_FETCHING = 'concern/GET_CONCERN_DETAIL_FETCHING' as const
const GET_CONCERN_DETAIL_SUCCESS = 'concern/GET_CONCERN_DETAIL_SUCCESS' as const
const GET_CONCERN_DETAIL_ERROR = 'concern/GET_CONCERN_DETAIL_ERROR' as const

export const getConcernList = actionCreator<GetConcernListPayload>(
  GET_CONCERN_LIST,
  { usePromise: true },
)

export const getConcernDetail = actionCreator<GetConcernDetailPayload>(
  GET_CONCERN_DETAIL,
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

const {
  asyncActions: getConcernDetailAsyncActions,
  asyncSaga: getConcernDetailSaga,
} = createAsyncActionsAndSaga(
  GET_CONCERN_DETAIL_FETCHING,
  GET_CONCERN_DETAIL_SUCCESS,
  GET_CONCERN_DETAIL_ERROR,
)<ReturnType<typeof getConcernDetail>, ConcernDetailAttrPOJO, any>(
  concernAPI.getConcernDetail,
)

export function* concernSaga() {
  yield takeLatest(GET_CONCERN_LIST, getConcernListSaga)
  yield takeLatest(GET_CONCERN_DETAIL, getConcernDetailSaga)
}

const initialState: State = {
  concernList: Immutable.Map(),
  concernDefail: new ConcernDetail(),
  isConcernListFetching: false,
  hasConcernListSuccess: false,
  hasConcernListError: false,
  isConcernDetailFetching: false,
  hasConcernDetailSuccess: false,
  hasConcernDetailError: false,
}

function conceruReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case GET_CONCERN_LIST_FETCHING: {
      return {
        ...state,
        concernList: state.concernList.clear(),
        isConcernListFetching: true,
        hasConcernListSuccess: false,
        hasConcernListError: false,
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
        isConcernListFetching: false,
        hasConcernListSuccess: true,
      }
    }
    case GET_CONCERN_LIST_ERROR: {
      return {
        ...state,
        isConcernListFetching: false,
        hasConcernListError: true,
      }
    }
    case GET_CONCERN_DETAIL_FETCHING: {
      return {
        ...state,
        concernDefail: state.concernDefail.clear(),
        isConcernDetailFetching: true,
        hasConcernDetailSuccess: false,
        hasConcernDetailError: false,
      }
    }
    case GET_CONCERN_DETAIL_SUCCESS: {
      return {
        ...state,
        concernDefail: new ConcernDetail(action.payload),
        isConcernDetailFetching: false,
        hasConcernDetailSuccess: true,
      }
    }
    case GET_CONCERN_DETAIL_ERROR: {
      return {
        ...state,
        isConcernDetailFetching: false,
        hasConcernDetailError: true,
      }
    }
    default:
      return state
  }
}

export default conceruReducer
