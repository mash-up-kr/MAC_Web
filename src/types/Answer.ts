export interface AnswerListProps {
  answers: Answer[]
}
export interface Answer {
  name: string
  contents: string
  time: string
  likeNum: number
}
