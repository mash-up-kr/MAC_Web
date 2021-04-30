import React, { FC } from 'react'
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom'
import Concerns from 'pages/Concerns'
import Concern from 'pages/Concern'

const Routes: FC<RouteComponentProps> = () => {
  return (
    <Switch>
      <Route exact path="/concerns" component={Concerns} />
      <Route exact path="/concern/:id" component={Concern} />
    </Switch>
  )
}

export default withRouter(Routes)
