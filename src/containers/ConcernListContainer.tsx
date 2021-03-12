import React from 'react'

import ConcernList from 'components/ConcernList'

const MOCK_CONCERN_LIST = [
  {
    id: 1,
    title: 'title1',
    content: 'content1',
    createdAt: '2010.02.12 오전 08:00 ',
    category: {
      name: '연애',
      imageUrl: '',
    },
  },
  {
    id: 2,
    title: 'title2',
    content: 'content2',
    createdAt: '2010.02.12 오전 08:00 ',
    category: {
      name: '연애',
      imageUrl: '',
    },
  },
  {
    id: 3,
    title: 'title3',
    content: 'content3',
    createdAt: '2010.02.12 오전 08:00 ',
    category: {
      name: '연애',
      imageUrl: '',
    },
  },
]

function ConcernListContainer() {
  return (
    <>
      <ConcernList concernList={MOCK_CONCERN_LIST} />
    </>
  )
}

export default ConcernListContainer
