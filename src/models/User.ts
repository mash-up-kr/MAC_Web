/* External dependencies */
import Immutable from 'immutable'

interface UserAttrPOJO {
  id: number
  nickname: string
  imageUrl: string
}

interface UserAttr extends UserAttrPOJO {}

const UserRecord = Immutable.Record<UserAttr>({
  id: 0,
  nickname: '',
  imageUrl: '',
})

class User extends UserRecord {}

export default User
