import GlobalStyle from "./styles/Global"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./routes"
import { RecipesProvider } from "./hooks/useRecipes"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <>
      <Router>
        <RecipesProvider>
          <Routes />
        </RecipesProvider>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
