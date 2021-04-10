/* External dependencies */
import Immutable from 'immutable'

/* Internal dependencies */
import Location from 'models/Location'
import Category, { categoryList } from 'constants/Category'
import Emotion, { emotionList } from 'constants/Emotion'

export interface ConcernAttrPOJO {
  id: number
  title: string
  content: string
  category: Category
  emotion: Emotion
  location: Location
  userId: number
  distance: number
  createdAt: string
  updatedAt: string
  deletedAt: string
}

interface ConcernAttr extends ConcernAttrPOJO {}

const ConcernRecord = Immutable.Record<ConcernAttr>({
  id: 0,
  title: '',
  content: '',
  category: categoryList[0],
  emotion: emotionList[0],
  location: new Location(),
  userId: 0,
  distance: 0,
  createdAt: '',
  updatedAt: '',
  deletedAt: '',
})

class Concern extends ConcernRecord {
  constructor(args: ConcernAttrPOJO) {
    super({
      ...args,
      location: new Location(args.location),
    })
  }
}

export default Concern
