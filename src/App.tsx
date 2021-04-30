/* External dependencies */
import React from 'react'
import { BrowserRouter, useHistory, useLocation } from 'react-router-dom'
import { GlobalStyle } from 'global-styles'
import Routes from 'Routes'

/* Internal dependencies */
import QueryParamService from 'services/QueryParamService'

function Initializer() {
  const history = useHistory()
  const location = useLocation()

  if (!QueryParamService.hasToken()) {
    QueryParamService.parse()
    history.replace(location.pathname)
  }

  return null
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <Initializer />
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
