import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { api } from "../service/api"

//Types
interface RecipesProviderProps {
  children: ReactNode
}
interface Recipe {
  id: number | string
  available: number
  name: string
  description: string
  price: number
  image: string
}
interface Sidenav {
  isSideNavOpen: boolean
}

interface RecipeContextData {
  isSideNavOpen: boolean
  closeSidenav: () => void
  recipes: Recipe[]
}

interface foodState {
  food: string
  setFood: () => void
}

//Context
const RecipesContext = createContext<RecipeContextData>({} as RecipeContextData)

//Provider
export const RecipesProvider = ({
  children,
}: RecipesProviderProps): JSX.Element => {
  //ESTATES
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    ;(async function fetchData() {
      const response = await api.get("/food.json")
      let recipesData: Recipe[] = []

      for (const key in response.data) {
        recipesData.push({ id: key, ...response.data[key].data })
      }

      setRecipes(recipesData)
    })()

    /*
    api
      .get("/food.json")
      .then(function (response) {
        // handle success
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      */
  }, [])

  function closeSidenav() {
    setIsSideNavOpen(!isSideNavOpen)
  }

  return (
    <RecipesContext.Provider value={{ isSideNavOpen, closeSidenav, recipes }}>
      {children}
    </RecipesContext.Provider>
  )
}

export function useRecipes(): RecipeContextData {
  const context = useContext(RecipesContext)

  return context
}
