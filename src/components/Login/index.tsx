import { Container } from "./styles"
import logo from "../../assets/logo_dark.svg"
import google from "../../assets/google.svg"

import firebase from "../../config/firebase-config"
import { Redirect, useHistory } from "react-router"
import { useAuth } from "../../hooks/useAuth"
import { ChangeEvent } from "react"

interface TypeEvent {
  handleOnSubmit: (e: ChangeEvent<HTMLFormElement>) => Promise<void>
}
const Login = () => {
  const history = useHistory()
  const { setCurrentUser, currentUser, onSubmit } = useAuth()

  async function handleOnSubmit() {
    try {
      await onSubmit()
      history.push("/")
    } catch (error) {}
  }

  return (
    <Container>
      <div>
        <img src={logo} alt='logo dark' className='login__logo' />

        <div className='login__box'>
          <h2>Welcome To Recifood</h2>

          <button type='button' onClick={handleOnSubmit}>
            <span>Login with</span> <img src={google} alt='google' />
          </button>
        </div>
      </div>
    </Container>
  )
}

export default Login
