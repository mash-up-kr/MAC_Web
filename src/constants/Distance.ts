import { toArray } from 'lodash-es'

enum Distance {
  D3 = 3,
  D5 = 5,
  D10 = 10,
  D50 = 50,
  D100 = 100,
}

export const distanceList = toArray(Distance)

export default Distance
