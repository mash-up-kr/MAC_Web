/* External dependencies */
import axios from 'axios'

/* Internal dependencies */
import { GetAnswerListPayload } from 'modules/reducers/answerReducer'
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
