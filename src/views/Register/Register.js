import React, { useState } from 'react'
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
/** MUTATION */
import { UserRegister } from '../../apollo/'

import styles from 'assets/jss/material-kit-react/views/loginPage.js'
/** UTILS */
import { useForm } from '../../utils/hooks'
import { storeToken } from '../../utils'
const useStyles = makeStyles(styles)

export default function Register (props) {
  const [cardAnimaton, setCardAnimation] = useState('cardHidden')
  setTimeout(function () {
    setCardAnimation('')
  }, 700)
  const classes = useStyles()

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: '',
    // firstName: '',
    // lastName: '',
    email: '',
    password: ''
  })
  const [createUser, { loading }] = useMutation(UserRegister, {
    variables: {
      input: values
    },
    onCompleted: () => { props.history.push('/') }
  })

  async function registerUser () {
    try {
      const res = await createUser()
      console.log(res)
      storeToken(res.data.User.token)
      props.history.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={classes.container}>
      <GridContainer justify='center'>
        <GridItem xs={16} sm={10} md={5}>
          <Card className={classes[cardAnimaton]}>
            <form onSubmit={onSubmit} className={classes.form}>
              <CardHeader color='info' className={classes.cardHeader}>
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
                    name: 'username',
                    value: values.username,
                    onChange: onChange,
                    type: 'text',
                    endAdornment: (
                      <InputAdornment position='end'>
                        <People className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                {/* <CustomInput
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
                /> */}
                <CustomInput
                  labelText='Email...'
                  id='email'
                  name='email'
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
              <Button type='submit' color='info' block>Register</Button>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
}
