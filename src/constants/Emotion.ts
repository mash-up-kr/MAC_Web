import { toArray } from 'lodash-es'

enum Emotion {
  Happy = '기쁨',
  Sad = '슬픔',
  Angry = '화남',
  flustered = '당황',
  Annoy = '짜증',
}

export const emotionList = toArray(Emotion)

export default Emotion
