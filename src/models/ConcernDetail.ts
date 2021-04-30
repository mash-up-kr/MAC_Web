/* External dependencies */
import Immutable from 'immutable'

/* Internal dependencies */
import Location from 'models/Location'
import User from 'models/User'
import Category, { categoryList } from 'constants/Category'
import Emotion, { emotionList } from 'constants/Emotion'

export interface ConcernDetailAttrPOJO {
  id: number
  title: string
  content: string
  category: Category
  emotion: Emotion
  location: Location
  user: User
}

interface ConcernDetailAttr extends ConcernDetailAttrPOJO {}

const ConcernDetailRecord = Immutable.Record<ConcernDetailAttr>({
  id: 0,
  title: '',
  content: '',
  category: categoryList[0],
  emotion: emotionList[0],
  location: new Location(),
  user: new User(),
})

class ConcernDetail extends ConcernDetailRecord {
  constructor(args: Partial<ConcernDetailAttrPOJO> = {}) {
    super({
      ...args,
      location: new Location(args.location),
      user: new User(args.user),
    })
  }
}

export default ConcernDetail
