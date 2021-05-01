/* External dependencies */
import qs from 'qs'
import { isEmpty } from 'lodash-es'

class QueryParamService {
  token: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNjE5ODY1MDY4LCJleHAiOjE2MjA0Njk4Njh9.59VsuvtAXLJi6vR54fZPbw36Ta8CZzWy02p9HI6jgLE'

  parse() {
    const { token } = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    })
    if (!isEmpty(token)) {
      this.token = token as string
    }
  }

  getToken() {
    return this.token
  }

  hasToken() {
    return !isEmpty(this.token)
  }
}

export default new QueryParamService()
