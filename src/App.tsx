/* External dependencies */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from 'global-styles'
import Routes from 'Routes'

/* Internal dependencies */
import QueryParamService from 'services/QueryParamService'

function App() {
  if (!QueryParamService.hasToken()) {
    QueryParamService.parse()
  }

  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
