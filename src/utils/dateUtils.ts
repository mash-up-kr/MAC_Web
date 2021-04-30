export function getDateString(dateString: string) {
  const createdAt = new Date(dateString)

  const year = createdAt.getFullYear()
  const month = createdAt.getMonth() + 1
  const date = createdAt.getDate()
  const prefix = createdAt.getHours() >= 12 ? '오후' : '오전'
  const minute = (() => {
    const receivedMinute = createdAt.getMinutes()

    if (receivedMinute < 10) {
      return `0${receivedMinute}`
    }
    return receivedMinute
  })()
  const hour = (() => {
    const receivedHour = createdAt.getHours() % 12

    if (receivedHour < 10) {
      return `0${receivedHour}`
    }
    return receivedHour
  })()

  return `${year}.${month}.${date} ${prefix} ${hour}:${minute}`
}
