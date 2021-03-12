/* External dependencies */
import Immutable from 'immutable'

interface LocationAttr {
  id: number
  latitude: number
  longitude: number
}

const LocationRecord = Immutable.Record<LocationAttr>({
  id: 0,
  latitude: 0,
  longitude: 0,
})

class Location extends LocationRecord {}

export default Location
