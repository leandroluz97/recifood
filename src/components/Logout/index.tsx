import { LogoutBtn } from "./styles"
import { FiLogOut } from "react-icons/fi"
import { useHistory } from "react-router"
import firebase from "../../config/firebase-config"
import { useAuth } from "../../hooks/useAuth"

//FiLogOut
const Logout = () => {
  const { setCurrentUser } = useAuth()
  let history = useHistory()

  function handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setCurrentUser(null)
        history.push("/login")
      })
  }
  return (
    <LogoutBtn onClick={handleLogout} type='button'>
      <FiLogOut color={"C9AA81"} size={20} />
    </LogoutBtn>
  )
}

export default Logout
