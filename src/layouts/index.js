import React from 'react'
import Header from '../components/Header/Header'
import HeaderLinks from '../components/Header/HeaderLinks'
import GridItem from '../components/Grid/GridItem'
import GridContainer from '../components/Grid/GridContainer'
import { isLoggedIn } from '../utils/'

const privateLinks = [{
  to: '/profile',
  name: 'Profile'
}]
const publicLinks = [
  {
    to: '/register',
    name: 'Register'
  },
  {
    to: '/login',
    name: 'Login'
  }
]

export default (props) => {
  return (
    <>
      <Header
        color='info'
        rightLinks={<HeaderLinks links={isLoggedIn() ? privateLinks : publicLinks} />}
        brand='Social Network'
      />
      <GridContainer
        spacing={3}
        direction='row'
        justify='center'
        alignItems='center'
      >
        <GridItem xs={6}>
          {props.children}
        </GridItem>
      </GridContainer>
    </>
  )
}
