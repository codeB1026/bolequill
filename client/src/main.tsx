import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Wrapper from './layouts/wrapper/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Wrapper> 
      <App />
    </Wrapper>
  </React.StrictMode>,
)
