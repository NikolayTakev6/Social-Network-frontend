import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
// core components
import { makeStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'
// icons
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

/** UTILS */
import { useForm } from '../../utils/hooks'
/** MUTATION */
import { UserLogin } from '../../apollo'

import styles from 'assets/jss/material-kit-react/views/loginPage.js'

const useStyles = makeStyles(styles)

export default function LoginPage (props) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden')
  setTimeout(function () {
    setCardAnimation('')
  }, 700)
  const classes = useStyles()

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: '',
    password: ''
  })

  const [login, { loading }] = useMutation(UserLogin, {
    variables: values,
    onCompleted: () => { props.history.push('/profile') }
  })

  function loginUserCallback () {
    login()
  }

  return (
    <div className={classes.container}>
      <GridContainer justify='center'>
        <GridItem xs={12} sm={10} md={5}>
          <Card className={classes[cardAnimaton]}>
            <form onSubmit={onSubmit} className={classes.form}>
              <CardHeader color='info' className={classes.cardHeader}>
                <h4>Login</h4>
                <div className={classes.socialLine} />
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText='Email...'
                  id='email'
                  name='email'
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: 'email',
                    name: 'email',
                    onChange: onChange,
                    value: values.email,
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Email className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText='Password'
                  id='pass'
                  name='password'
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: 'password',
                    name: 'password',
                    onChange: onChange,
                    value: values.password,
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
              <div className='inline'>
                <Button onClick={() => { props.history.push('/register') }} link color='info'>Register</Button>
              </div>
              <Button type='submit' color='info' block>Login</Button>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
}
