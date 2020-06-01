import React from 'react'
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

export default function LoginPage (props) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden')
  setTimeout(function () {
    setCardAnimation('')
  }, 700)
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <GridContainer justify='center'>
        <GridItem xs={16} sm={10} md={5}>
          <Card className={classes[cardAnimaton]}>
            <form className={classes.form}>
              <CardHeader color='primary' className={classes.cardHeader}>
                <h4>Login</h4>
                <div className={classes.socialLine} />
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText='Email...'
                  id='email'
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
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
                  id='pass'
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
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
              <div class='inline'>
                <Button link color='primary'>Register</Button>
                <Button link color='primary'>Forgotten password</Button>
              </div>
              <Button type='submit' color='primary' block>Login</Button>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
}
