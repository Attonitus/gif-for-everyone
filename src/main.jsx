import React from 'react'
import ReactDOM from 'react-dom/client'
import GifExpertApp from './GifExpertApp'
import GlobalStylesStyled from './GlobalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
    <GlobalStylesStyled />
  </React.StrictMode>,
)
