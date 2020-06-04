import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from '../layouts'
import PublicRoute from './guards/PublicRoute'
import PrivateRoute from './guards/PrivateRoute'
import Register from '../views/Register/Register'
import LoginPage from '../views/LoginPage/LoginPage'
import ProfilePage from '../views/ProfilePage/ProfilePage'

export default () => {
  return (
    <Layout>
      <Switch>
        <PublicRoute path='/register' exact component={Register} />
        <PublicRoute path='/login' exact component={LoginPage} />
        <PrivateRoute path='/profile' exact component={ProfilePage} />
      </Switch>
    </Layout>
  )
}
