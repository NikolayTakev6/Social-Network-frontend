import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Email from '@material-ui/icons/Email'
import People from '@material-ui/icons/People'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Button from 'components/CustomButtons/Button.js'
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import CardHeader from 'components/Card/CardHeader.js'
import CustomInput from 'components/CustomInput/CustomInput.js'

import styles from 'assets/jss/material-kit-react/views/loginPage.js'

const useStyles = makeStyles(styles)

export default function Register (props) {
  const [cardAnimaton, setCardAnimation] = useState('cardHidden')
  setTimeout(function () {
    setCardAnimation('')
  }, 700)
  const classes = useStyles()

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const onChange = (event) => {
    console.log(event.target.value)
    console.log(event.target.name)
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update (proxy, result) {
      console.log(result)
    }
  })
  const onSubmit = (event) => {
    event.preventDefault()
    addUser({ variables: values })
  }
  return (
    <div className={classes.container}>
      <GridContainer justify='center'>
        <GridItem xs={16} sm={10} md={5}>
          <Card className={classes[cardAnimaton]}>
            <form onSubmit={onSubmit} className={classes.form}>
              <CardHeader color='primary' className={classes.cardHeader}>
                <h4>Register</h4>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText='First Name...'
                  id='first'
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    name: 'firstName',
                    value: values.firstName,
                    onChange: onChange,
                    type: 'text',
                    endAdornment: (
                      <InputAdornment position='end'>
                        <People className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText='Last Name...'
                  id='last'
                  name='lastName'
                  onChange={onChange}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    name: 'lastName',
                    value: values.lastName,
                    onChange: onChange,
                    type: 'text',
                    endAdornment: (
                      <InputAdornment position='end'>
                        <People className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText='Email...'
                  id='email'
                  name='email'
                  onChange={onChange}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    name: 'email',
                    value: values.email,
                    onChange: onChange,
                    type: 'email',
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Email className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText='Password'
                  id='password'
                  name='password'
                  onChange={onChange}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    name: 'password',
                    value: values.password,
                    onChange: onChange,
                    type: 'password',
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Icon className={classes.inputIconsColor}>
                          lock_outline
                        </Icon>
                      </InputAdornment>
                    ),
                    autoComplete: 'off'
                  }}
                />
              </CardBody>
              <div className='inline' />
              <Button type='submit' color='primary' block>Register</Button>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
}

const REGISTER_USER = gql`
    mutation addUser(
        $firstName: String!,
        $lastName: String!,
        $email: String!,
        $password: String!
    ) {
        addUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
        ) {
          firstName
        }
    }
`
