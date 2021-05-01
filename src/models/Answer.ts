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
  likeCount: number
  liked: boolean
  isNew: boolean
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
  likeCount: 0,
  liked: false,
  isNew: false,
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
