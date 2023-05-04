import { Authenticator } from '@aws-amplify/ui-react'
import React from 'react'
import SignInHeader from '../components/signIn/SignInHeader'
import SignInFooter from '../components/signIn/SignInFooter'
import SignUpHeader from '../components/signUp.js/SignUpHeader'
import SignUpFooter from '../components/signUp.js/SignUpFooter'
import ConfirmSignUp from '../components/signUp.js/ConfirmSignUp'
import ResetPassword from '../components/forgotPassword/ResetPassword'
import ConfirmResetPassword from '../components/forgotPassword/ConfirmResetPassword'
import formFields from './formFields'
import '../index.css'

const components = {
  SignIn: {
    Header: SignInHeader,
    Footer: SignInFooter,
  },
  SignUp: {
    Header: SignUpHeader,
    Footer: SignUpFooter,
  },
  ConfirmSignUp: {
    Header: ConfirmSignUp,
  },
  ResetPassword: {
    Header: ResetPassword,
  },
  ConfirmResetPassword: {
    Header: ConfirmResetPassword,
  },
}

const Login = () => {
  return (
    <Authenticator
      // hideSignUp
      socialProviders={['facebook', 'google', 'apple']}
      formFields={formFields}
      components={components}
    >
      {({ signOut, user }) => <h1>{user}</h1>}
    </Authenticator>
  )
}

export default Login
