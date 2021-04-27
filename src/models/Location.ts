/* External dependencies */
import Immutable from 'immutable'

interface LocationAttrPOJO {
  type: string
  coordinates: number[]
}

interface LocationAttr extends LocationAttrPOJO {}

const LocationRecord = Immutable.Record<LocationAttr>({
  type: '',
  coordinates: [],
})

class Location extends LocationRecord {}

export default Location
