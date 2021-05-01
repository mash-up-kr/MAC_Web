import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import ReduxStore from 'modules/reduxStore'
import colors from 'constants/colors'
import media from 'constants/media'
import App from 'App'
import * as serviceWorker from 'serviceWorker'
import 'sanitize.css/sanitize.css'

const theme = {
  colors,
  media,
}

console.log('v1.0.1')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore.getStore()}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.unregister()
