/* External dependencies */
import axios from 'axios'
import qs from 'qs'

/* Internal dependencies */
import { GetConcernListPayload } from 'modules/reducers/concernReducer'
import { ConcernAttrPOJO } from 'models/Concern'
import { ResponseType } from 'utils/reduxUtils'

const MOCK = {
  data: {
    data: [
      {
        id: 1,
        title: '남자친구의 판도라의 상자를 열었어요',
        content: '남자친구와 만난지 3년이 되어갑니다.',
        category: '연애',
        emotion: '기쁨',
        location: {
          latitude: 37.50147495831243,
          longitude: 126.77788776004671,
        },
        userId: 30,
        distance: 0.111,
        createdAt: '2021-04-20T11:58:24.000Z',
        updatedAt: '2021-04-20T11:58:24.000Z',
        deletedAt: null,
      },
      {
        id: 2,
        title: '남자친구의 판도라의 상자를 열었어요',
        content: '남자친구와 만난지 3년이 되어갑니다.',
        category: '연애',
        emotion: '기쁨',
        location: {
          latitude: 37.50147495831243,
          longitude: 126.77788776004671,
        },
        userId: 30,
        distance: 0.111,
        createdAt: '2021-04-20T11:58:24.000Z',
        updatedAt: '2021-04-20T11:58:24.000Z',
        deletedAt: null,
      },
    ],
  },
}

export const getConcernList: ResponseType<ConcernAttrPOJO[]> = (
  payload: GetConcernListPayload,
) => {
  // return axios.get(`/api/v1/counselings?${qs.stringify(payload)}`)
  return new Promise(resolve => {
    resolve(MOCK as any)
  })
}
