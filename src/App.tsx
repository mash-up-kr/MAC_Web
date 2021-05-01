/* External dependencies */
import React, { useRef } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from 'global-styles'
import Routes from 'Routes'

/* Internal dependencies */
import QueryParamService from 'services/QueryParamService'

function Initializer() {
  const isFulfilled = useRef(false)

  if (!QueryParamService.hasToken() && !isFulfilled.current) {
    QueryParamService.parse()
    isFulfilled.current = true
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
