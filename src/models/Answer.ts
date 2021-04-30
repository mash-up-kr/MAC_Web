/* External dependencies */
import Immutable from 'immutable'

/* Internal dependencies */
import User from 'models/User'

export interface AnswerPOJO {
  id: number
  content: string
  userId: number
  counselingQuestionId: number
  user: User
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}

interface AnswerAttr extends AnswerPOJO {}

const AnswerRecord = Immutable.Record<AnswerAttr>({
  id: 0,
  content: '',
  userId: 0,
  counselingQuestionId: 0,
  user: new User(),
  createdAt: '',
  updatedAt: '',
  deletedAt: '',
})

class Answer extends AnswerRecord {
  constructor(args: Partial<AnswerPOJO>) {
    super({
      ...args,
      user: new User(args.user),
    })
  }
}

export default Answer
