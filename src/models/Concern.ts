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
  commentCount: number
  likeCount: number
  liked: boolean
  isNew: boolean
  createdAt: string
  updatedAt: string
  deletedAt: string | null
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
  commentCount: 0,
  likeCount: 0,
  liked: false,
  isNew: false,
  createdAt: '',
  updatedAt: '',
  deletedAt: null,
})

class Concern extends ConcernRecord {
  constructor(args: Partial<ConcernAttrPOJO> = {}) {
    super({
      ...args,
      location: new Location(args.location),
    })
  }
}

export default Concern
