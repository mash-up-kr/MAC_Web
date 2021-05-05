import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Layout from 'components/layout'
import ConcernContainer from 'containers/ConcernContainer'

interface RouterProps {
  id: string
}

interface ConcernProps extends RouteComponentProps<RouterProps> {
  directPath: boolean
}

function Concern({ match, directPath }: ConcernProps) {
  const { id } = match.params

  return (
    <Layout>
      <ConcernContainer concernId={id} directPath={directPath} />
    </Layout>
  )
}

export default Concern
