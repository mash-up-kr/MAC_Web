/* External dependencies */
import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import concern, { concernSaga } from './concernReducer'
import answer, { answerSaga } from './answerReducer'

const rootReducer = combineReducers({
  concern,
  answer,
})

export function* rootSaga() {
  yield all([concernSaga(), answerSaga()])
}

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
