import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './global'
import { Page } from './Page'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
    <GlobalStyle />
  </React.StrictMode>
)
