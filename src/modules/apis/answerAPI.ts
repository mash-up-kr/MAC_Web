/* External dependencies */
import axios from 'axios'

/* Internal dependencies */
import {
  GetAnswerListPayload,
  PostAnswerLikePayload,
  DeleteAnswerLikePayload,
} from 'modules/reducers/answerReducer'
import { AnswerPOJO } from 'models/Answer'
import QueryParamService from 'services/QueryParamService'
import { ResponseType } from 'utils/reduxUtils'
import { getRequestUrl } from 'utils/requestUtils'

export const getAnswerList: ResponseType<AnswerPOJO[]> = ({
  concernId,
}: GetAnswerListPayload) => {
  return axios.get(
    `${getRequestUrl()}/api/v1/counselings/${concernId}/comments`,
    {
      headers: {
        Authorization: `Bearer ${QueryParamService.getToken()}`,
      },
    },
  )
}

export const postAnswerLike: ResponseType<any> = ({
  answerId,
}: PostAnswerLikePayload) => {
  return axios.post(
    `${getRequestUrl()}/api/v1/comments/${answerId}/like`,
    undefined,
    {
      headers: {
        Authorization: `Bearer ${QueryParamService.getToken()}`,
      },
    },
  )
}

export const deleteAnswerLike: ResponseType<any> = ({
  answerId,
}: DeleteAnswerLikePayload) => {
  return axios.delete(`${getRequestUrl()}/api/v1/comments/${answerId}/like`, {
    headers: {
      Authorization: `Bearer ${QueryParamService.getToken()}`,
    },
  })
}
