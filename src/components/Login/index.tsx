import { Container } from "./styles"
import logo from "../../assets/logo_dark.svg"
import google from "../../assets/google.svg"

import firebase from "../../config/firebase-config"
import { useHistory } from "react-router"

const Login = () => {
  const history = useHistory()
  function onSubmit() {
    let provider = new firebase.auth.GoogleAuthProvider()

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        let credential = result.credential as firebase.auth.OAuthCredential

        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = credential.accessToken
        // The signed-in user info.
        let user = result.user

        history.push("/")
      })
      .catch((error) => {
        console.log(error)
      })
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
