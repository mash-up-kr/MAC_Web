/* External dependencies */
import Immutable from 'immutable'

interface AnswerAttr {
  id: number
  content: string
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}

const AnswerRecord = Immutable.Record<AnswerAttr>({
  id: 0,
  content: '',
  createdAt: '',
  updatedAt: '',
  deletedAt: '',
})

class Answer extends AnswerRecord {}

export default Answer
