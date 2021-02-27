import React, { FC } from 'react'
import {
  Route,
  RouteComponentProps,
  Switch,
  useLocation,
  withRouter,
} from 'react-router-dom'
import Layout from 'components/layout'

const Routes: FC<RouteComponentProps> = () => {
  const location = useLocation()

  return (
    <Switch>
      <Route exact path="/test" component={Layout} />
    </Switch>
  )
}

export default withRouter(Routes)
