/* Internal dependencies */
import { getEnvironment } from 'utils/environmentUtils'

export function getRequestUrl() {
  switch (getEnvironment()) {
    case 'production':
      return 'https://api.cowcat.live'
    default:
      return 'https://api.cowcat.live'
  }
}
