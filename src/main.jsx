import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoutes from './routes'

import GlobalStyle from './styles/globalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <MyRoutes />
  </React.StrictMode>,
)
