/* Internal dependencies */
import { RootState } from 'modules/reducers'

export const getAnswerList = (state: RootState) =>
  state.answer.asnwerList.toList()
