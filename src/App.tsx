import GlobalStyle from "./styles/Global"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./routes"

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
