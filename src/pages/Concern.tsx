import React from 'react'
import Layout from 'components/layout'
import ConcernContainer from 'containers/ConcernContainer'
import { Answer } from 'types/Answer'
import Answers from 'components/answerlist/Answers'

function Concern({ match }) {
  const { id } = match.params

  return (
    <Layout>
      <ConcernContainer concernId={id} />
      <Answers answers={dummy} />
    </Layout>
  )
}

export default Concern

// dummy
const dummy: Answer[] = [
  {
    id: 1,
    name: '또또로',
    contents:
      '남자친구와 만난지 3년이 되어갑니다. 그런데 며칠전 남자친구의 휴대폰을 우연히 보게 되었어요...',
    time: '2010.02.12 오전 08:00',
    like: true,
    likeNum: 10,
  },
  {
    id: 2,
    name: '로또',
    contents:
      '남자친구와 만난지 3년이 되어갑니다. 그런데 며칠전 남자친구의 휴대폰을 우연히 보게 되었어요...',
    time: '2010.02.12 오전 08:01',
    like: false,
    likeNum: 20,
  },
  {
    id: 3,
    name: '로또',
    contents:
      '남자친구와 만난지 3년이 되어갑니다. 그런데 며칠전 남자친구의 휴대폰을 우연히 보게 되었어요...',
    time: '2010.02.12 오전 08:01',
    like: false,
    likeNum: 20,
  },
  {
    id: 4,
    name: '로또',
    contents:
      '남자친구와 만난지 3년이 되어갑니다. 그런데 며칠전 남자친구의 휴대폰을 우연히 보게 되었어요...',
    time: '2010.02.12 오전 08:01',
    like: true,
    likeNum: 20,
  },
]
