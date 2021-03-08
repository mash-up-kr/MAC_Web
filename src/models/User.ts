/* External dependencies */
import Immutable from 'immutable'

/* Internal dependencies */
import Location from 'models/Location'
import Gender from 'constants/Gender'

interface UserAttr {
  id: number
  nickname: string
  birthday: string
  gender: Gender
  imageUrl: string
  location: Location
}

const UserRecord = Immutable.Record<UserAttr>({
  id: 0,
  nickname: '',
  birthday: '',
  gender: Gender.Male,
  imageUrl: '',
  location: new Location(),
})

class User extends UserRecord {}

export default User
