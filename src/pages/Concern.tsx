import React from 'react'
import Layout from 'components/layout'
import ConcernContainer from 'containers/ConcernContainer'

function Concern({ match }) {
  const { id } = match.params

  return (
    <Layout>
      <ConcernContainer concernId={id} />
    </Layout>
  )
}

export default Concern
