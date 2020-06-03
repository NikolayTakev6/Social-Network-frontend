import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'

import 'assets/scss/material-kit-react.scss?v=1.8.0'
import 'react-toastify/dist/ReactToastify.css'

import GridContainer from './components/Grid/GridContainer'
import GridItem from './components/Grid/GridItem'

import Header from './components/Header/Header'
import HeaderLinks from './components/Header/HeaderLinks'
// import HeaderBrand from './components/Header/HeaderBrand'

import Register from './views/Register/Register'
import LoginPage from './views/LoginPage/LoginPage'
import ProfilePage from './views/ProfilePage/ProfilePage'
import { toast } from 'react-toastify'

function App () {
  const hist = createBrowserHistory()
  toast.configure({
    autoClose: 5000,
    draggable: false
  })
  return (
    <Router history={hist}>
      <Header
        color='info'
        rightLinks={<HeaderLinks />}
        brand='Social Network'
      />
      <GridContainer
        spacing={3}
        direction='row'
        justify='center'
        alignItems='center'
      >
        <GridItem xs={6}>
          <Switch>
            <Route path='/register' exact component={Register} />
            <Route path='/' exact component={LoginPage} />
            <Route path='/profile' exact component={ProfilePage} />
          </Switch>
        </GridItem>
      </GridContainer>
    </Router>

  )
}

export default App
