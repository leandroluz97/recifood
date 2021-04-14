import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { toast } from "react-toastify"
import { api } from "../service/api"
import "react-toastify/dist/ReactToastify.css"

//Types
interface RecipesProviderProps {
  children: ReactNode
}
interface Recipe {
  id: string
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
  deleteRecipe: (id: string) => Promise<void>
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
    try {
      ;(async function fetchData() {
        const response = await api.get("/food.json")
        let recipesData: Recipe[] = []

        for (const key in response.data) {
          recipesData.push({ id: key, ...response.data[key].data })
        }

        setRecipes(recipesData)
      })()
    } catch (error) {
      console.log(error)
    }
  }, [])

  function closeSidenav() {
    setIsSideNavOpen(!isSideNavOpen)
  }

  async function deleteRecipe(id: string) {
    const recipeToDelete = recipes.find((recipe) => recipe.id === id)

    if (!recipeToDelete) {
      toast.error(" ❌ Error on deleting recipe. ")
      return
    }

    try {
      const response = await api.delete(`/food/${id}.json`)
      const deleteInfo = await response

      const filtered = recipes.filter((recipe) => recipe.id !== id)
      setRecipes(filtered)

      toast.success("Recipe deleted!")
    } catch (error) {
      console.log(error)
      toast.error(" ❌ Error on deleting recipe. ")
    }
  }

  return (
    <RecipesContext.Provider
      value={{ isSideNavOpen, closeSidenav, recipes, deleteRecipe }}
    >
      {children}
    </RecipesContext.Provider>
  )
}

export function useRecipes(): RecipeContextData {
  const context = useContext(RecipesContext)

  return context
}
