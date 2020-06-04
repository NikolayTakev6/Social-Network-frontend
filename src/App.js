import React from 'react'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'

import 'assets/scss/material-kit-react.scss?v=1.8.0'
import 'react-toastify/dist/ReactToastify.css'

import Routes from './routes'

import { toast } from 'react-toastify'

function App () {
  const hist = createBrowserHistory()
  toast.configure({
    autoClose: 5000,
    draggable: false
  })
  return (
    <Router history={hist}>
      <Routes />
    </Router>

  )
}

export default App
