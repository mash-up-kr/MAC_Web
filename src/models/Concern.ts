/* External dependencies */
import Immutable from 'immutable'

export interface ConcernAttrPOJO {
  id: number
  title: string
  content: string
  createdAt: string
  updatedAt: string
  deletedAt: string
}

interface ConcernAttr extends ConcernAttrPOJO {}

const ConcernRecord = Immutable.Record<ConcernAttr>({
  id: 0,
  title: '',
  content: '',
  createdAt: '',
  updatedAt: '',
  deletedAt: '',
})

class Concern extends ConcernRecord {}

export default Concern
