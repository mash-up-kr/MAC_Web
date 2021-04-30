/* External dependencies */
import qs from 'qs'
import { isEmpty } from 'lodash-es'

class QueryParamService {
  token: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0fSwiaWF0IjoxNjE5MjE3MDE5LCJleHAiOjE2MTk4MjE4MTl9.pC8Q1LulEoWRDAD8ZnP28uJckzHa2DNpvjtTmyEUyfw'

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
