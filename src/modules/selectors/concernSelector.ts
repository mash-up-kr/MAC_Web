/* Internal dependencies */
import { RootState } from 'modules/reducers'

export const getConcernList = (state: RootState) => state.concern.concernList
