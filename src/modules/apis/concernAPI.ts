/* External dependencies */
import axios from 'axios'
import qs from 'qs'

/* Internal dependencies */
import { GetConcernListPayload } from 'modules/reducers/concernReducer'
import { ConcernAttrPOJO } from 'models/Concern'
import QueryParamService from 'services/QueryParamService'
import { ResponseType } from 'utils/reduxUtils'
import { getRequestUrl } from 'utils/requestUtils'

export const getConcernList: ResponseType<ConcernAttrPOJO[]> = (
  payload: GetConcernListPayload,
) => {
  return axios.get(
    `${getRequestUrl()}/api/v1/counselings?${qs.stringify(payload)}`,
    {
      headers: {
        Authorization: `Bearer ${QueryParamService.getToken()}`,
      },
    },
  )
}
