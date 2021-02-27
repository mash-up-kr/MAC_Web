import React from 'react'
import Layout from 'components/layout'
import ConcernContainer from 'containers/ConcernContainer'
import { Answer } from 'types/Answer'
import AnswerList from 'components/answerlist/AnswerList'

const Concern = () => (
  <Layout title="고민 카드">
    <ConcernContainer />
    <AnswerList answers={dummy} />
  </Layout>
)
export default Concern

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
      '남자친구와 만난지 3년이 되어갑니다. 그런데 며칠전 남자친구의 휴대폰을 우연히 보게 되었어요...',
    time: '2010.02.12 오전 08:01',
    likeNum: 20,
  },
]
