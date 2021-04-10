/* External dependencies */
import axios from 'axios'
import qs from 'qs'

/* Internal dependencies */
import { GetConcernListPayload } from 'modules/reducers/concernReducer'
import { ConcernAttrPOJO } from 'models/Concern'
import { ResponseType } from 'utils/reduxUtils'

export const getConcernList: ResponseType<ConcernAttrPOJO[]> = (
  payload: GetConcernListPayload,
) => {
  return axios.get(`/api/v1/counselings?${qs.stringify(payload)}`)
}
