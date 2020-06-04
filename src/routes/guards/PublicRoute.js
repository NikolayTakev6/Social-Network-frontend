import React from 'react'
import { Redirect, Route } from 'react-router-dom'
/** UTILS */
import { isLoggedIn } from '../../utils'

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() ? (
        <Redirect to={{ pathname: '/profile', state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      )}
  />
)
