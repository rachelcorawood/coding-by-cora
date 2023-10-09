import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './components/HomePage.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>,
)
