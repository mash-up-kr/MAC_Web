/* External dependencies */
import axios from 'axios'
import qs from 'qs'

/* Internal dependencies */
import {
  GetConcernListPayload,
  GetConcernDetailPayload,
  PostConcernLikePayload,
  DeleteConcernLikePayload,
} from 'modules/reducers/concernReducer'
import { ConcernAttrPOJO } from 'models/Concern'
import { ConcernDetailAttrPOJO } from 'models/ConcernDetail'
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

export const getConcernDetail: ResponseType<ConcernDetailAttrPOJO> = ({
  concernId,
}: GetConcernDetailPayload) => {
  return axios.get(`${getRequestUrl()}/api/v1/counselings/${concernId}`, {
    headers: {
      Authorization: `Bearer ${QueryParamService.getToken()}`,
    },
  })
}

export const postConcernLike: ResponseType<any> = ({
  concernId,
}: PostConcernLikePayload) => {
  return axios.post(
    `${getRequestUrl()}/api/v1/counselings/${concernId}/like`,
    undefined,
    {
      headers: {
        Authorization: `Bearer ${QueryParamService.getToken()}`,
      },
    },
  )
}

export const deleteConcernLike: ResponseType<any> = ({
  concernId,
}: DeleteConcernLikePayload) => {
  return axios.delete(
    `${getRequestUrl()}/api/v1/counselings/${concernId}/like`,
    {
      headers: {
        Authorization: `Bearer ${QueryParamService.getToken()}`,
      },
    },
  )
}
