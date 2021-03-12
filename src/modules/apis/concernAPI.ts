/* External dependencies */
import axios from 'axios'

/* Internal dependencies */
import { GetConcernListPayload } from 'modules/reducers/concernReducer'
import { ConcernAttrPOJO } from 'models/Concern'
import { ResponseType } from 'utils/reduxUtils'

export type getConcernListResponseType = ConcernAttrPOJO[]

const MOCK_CONCERN_LIST = {
  data: [
    {
      id: 1,
      title: 'title1',
      content: 'content1',
      createdAt: '2021-03-08',
      updatedAt: '2021-03-08',
      deletedAt: '2021-03-08',
    },
    {
      id: 2,
      title: 'title2',
      content: 'content2',
      createdAt: '2021-03-08',
      updatedAt: '2021-03-08',
      deletedAt: '2021-03-08',
    },
    {
      id: 3,
      title: 'title3',
      content: 'content3',
      createdAt: '2021-03-08',
      updatedAt: '2021-03-08',
      deletedAt: '2021-03-08',
    },
  ],
}

export const getConcernList: ResponseType<getConcernListResponseType> = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(MOCK_CONCERN_LIST as any)
    }, 300)
  })
}

// export const getConcernList: ResponseType<getConcernListPOJO> = ({/* concernList payload */}: GetConcernListPayload) => {
//   return axios.get(/* 서버 api */)
// }
