import React, { FC } from 'react'
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from 'react-router-dom'
import Concerns from 'pages/Concerns'
import Concern from 'pages/Concern'
import MangerIntro from 'pages/ManagerIntro'

const Routes: FC<RouteComponentProps> = () => {
  return (
    <Switch>
      <Route exact path="/concerns" component={Concerns} />
      <Route
        exact
        path="/concern/:id"
        render={props => <Concern directPath {...props} />}
      />
      <Route
        exact
        path="/concerns/concern/:id"
        render={props => <Concern directPath={false} {...props} />}
      />
      <Route exact path="/intro" component={MangerIntro} />
    </Switch>
  )
}

export default withRouter(Routes)
