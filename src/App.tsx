import React, { useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

import colors from 'constants/colors'
import { GlobalStyle } from 'global-styles'

function App() {
  const theme = useMemo(
    () => ({
      colors,
    }),
    [],
  )

  return (
    <ThemeProvider theme={theme}>
      <div>hello world 헬로 월드</div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
