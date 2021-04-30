/* Internal dependencies */
import { RootState } from 'modules/reducers'

export const getConcernList = (state: RootState) =>
  state.concern.concernList.toList()

export const getConcernDetail = (state: RootState) =>
  state.concern.concernDefail
