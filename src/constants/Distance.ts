import { toArray } from 'lodash-es'

enum Distance {
  D3 = '3km',
  D5 = '5km',
  D10 = '10km',
  D50 = '50km',
  D100 = '100km',
}

export const distanceList = toArray(Distance)

export default Distance
