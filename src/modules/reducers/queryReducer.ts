/* Internal dependencies */
import Category from 'constants/Category'
import Distance, { distanceList } from 'constants/Distance'
import Emotion from 'constants/Emotion'
import { actionCreator } from 'utils/reduxUtils'
import { Value } from 'components/ConcernList'

type Action = ReturnType<typeof setQuery>

interface State {
  category?: Category
  distance: Distance
  emotion?: Emotion
}

export interface SetQueryPayload {
  key: string
  value: Value
}

const SET_QUERY = 'query/SET_QUERY'
const CLEAR_QUERY = 'query/CLEAR_QUERY'

export const setQuery = actionCreator<SetQueryPayload>(SET_QUERY)
export const clearQuery = actionCreator(CLEAR_QUERY)

const initialState: State = {
  category: undefined,
  distance: distanceList[0],
  emotion: undefined,
}

function queryReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case SET_QUERY: {
      const { key, value } = action.payload
      return {
        ...state,
        [key]: value,
      }
    }
    case CLEAR_QUERY: {
      return initialState
    }
    default:
      return state
  }
}

export default queryReducer
