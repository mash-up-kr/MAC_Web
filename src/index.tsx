import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import colors from 'constants/colors'
import media from 'constants/media'
import App from 'App'
import * as serviceWorker from 'serviceWorker'
import 'sanitize.css/sanitize.css'

const theme = {
  colors,
  media,
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.unregister()
