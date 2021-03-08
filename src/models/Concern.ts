/* External dependencies */
import Immutable from 'immutable'

interface ConcernAttr {
  id: number
  title: string
  content: string
  createdAt: string
  updatedAt: string
  deletedAt: string
}

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
