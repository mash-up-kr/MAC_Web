/* External dependencies */
import React, { useRef } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from 'global-styles'
import Routes from 'Routes'

/* Internal dependencies */
import QueryParamService from 'services/QueryParamService'

function App() {
  const isFulfilled = useRef(false)

  if (!isFulfilled.current) {
    QueryParamService.parse()
    isFulfilled.current = true
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
