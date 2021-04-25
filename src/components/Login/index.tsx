import { Container } from "./styles"
import logo from "../../assets/logo_dark.svg"
import google from "../../assets/google.svg"

import firebase from "firebase/app"

const Login = () => {
  function onSubmit() {
    let provider = new firebase.auth.GoogleAuthProvider()

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken
        // The signed-in user info.
        var user = result.user
        // ...
      })
      .catch((error) => {})
  }
  return (
    <Container>
      <div>
        <img src={logo} alt='logo dark' className='login__logo' />

        <div className='login__box'>
          <h2>Welcome To Recifood</h2>

          <button type='button' onClick={onSubmit}>
            <span>Login with</span> <img src={google} alt='google' />
          </button>
        </div>
      </div>
    </Container>
  )
}

export default Login
