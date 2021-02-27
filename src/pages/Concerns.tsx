import React from 'react'

import Layout from 'components/layout'
import { Answer } from 'types/Answer'
import AnswerList from 'components/answerlist/AnswerList'

const Concerns = () => (
  <Layout title="따근따근한 고민 보기">
    고민 리스트
    <AnswerList answers={dummy} />
  </Layout>
)

export default Concerns

// dummy
const dummy: Answer[] = [
  {
    name: '또또로',
    contents:
      '남자친구와 만난지 3년이 되어갑니다. 그런데 며칠전 남자친구의 휴대폰을 우연히 보게 되었어요...',
    time: '2010.02.12 오전 08:00',
    likeNum: 10,
  },
  {
    name: '로또',
    contents:
      '남자친구와 만난지 3년이 되어갑니다. 그런데 며칠전 남자친구의 휴대폰을 우연히 보게 되었어요... 평소 참 잘해주던 사람인데... 평소 참 잘해주던 사람인데... 평소 참 잘해주던 사람인데... 평소 참 잘해주던 사람인데... 평소 참 잘해주던 사람인데... 평소 참 잘해주던 사람인데... 평소 참 잘해주던 사람인데...',
    time: '2010.02.12 오전 08:01',
    likeNum: 20,
  },
]
