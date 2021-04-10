import { toArray } from 'lodash-es'

enum Emotion {
  Happy = 'happy',
  Sad = 'sad',
}

export const emotionList = toArray(Emotion)

export default Emotion
