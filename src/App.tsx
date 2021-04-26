import GlobalStyle from "./styles/Global"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./routes"
import { RecipesProvider } from "./hooks/useRecipes"
import { ToastContainer } from "react-toastify"
import { AuthProvider } from "./hooks/useAuth"

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <RecipesProvider>
            <Routes />
          </RecipesProvider>
        </Router>
        <GlobalStyle />
      </AuthProvider>
    </>
  )
}

export default App
