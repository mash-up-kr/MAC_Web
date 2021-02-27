export interface AnswerListProps {
  answers: Answer[]
}
export interface Answer {
  id: number
  name: string
  contents: string
  time: string
  likeNum: number
}
