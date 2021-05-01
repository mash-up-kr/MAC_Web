/* External dependencies */
import qs from 'qs'
import { isEmpty } from 'lodash-es'

class QueryParamService {
  token: string = ''

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
