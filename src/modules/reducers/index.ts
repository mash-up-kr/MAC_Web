/* External dependencies */
import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import concern, { concernSaga } from './concernReducer'

const rootReducer = combineReducers({
  concern,
})

export function* rootSaga() {
  yield all([concernSaga()])
}

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
