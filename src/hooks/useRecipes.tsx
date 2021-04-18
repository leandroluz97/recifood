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
  favourite: boolean
  name: string
  description: string
  price: number
  image: string
}

type RecipeAddInput = Omit<Recipe, "id" | "favourite">

interface Sidenav {
  isSideNavOpen: boolean
}

interface RecipeContextData {
  isSideNavOpen: boolean
  closeSidenav: () => void
  recipes: Recipe[]
  deleteRecipe: (id: string) => Promise<void>
  search: string
  setSearch: (value: string) => void
  favourites: boolean
  setFavourites: (fav: boolean) => void
  addFavourite: (id: string) => Promise<void>
  open: Recipe
  getRecipe: (id: string) => Promise<void>
  error: boolean
  addRecipe: (inputValue: RecipeAddInput) => Promise<void>
  setEditRecipe: (data: Recipe) => void
  editRecipe: Recipe
  updateRecipe: (data: Recipe) => Promise<void>
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
  const [search, setSearch] = useState("")
  const [favourites, setFavourites] = useState(false)
  const [isOpen, setIsOpen] = useState("")
  const [open, setOpen] = useState({} as Recipe)
  const [error, setError] = useState(false)
  const [editRecipe, setEditRecipe] = useState({} as Recipe)

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

  async function addFavourite(id: string) {
    try {
      const recipeToFavourite = recipes.find((recipe) => recipe.id === id)

      if (!recipeToFavourite) {
        toast.error(" ❌ Error on adding favourite recipe. ")
        return
      }

      recipeToFavourite["favourite"] = !recipeToFavourite.favourite
      const data = { ...recipeToFavourite }

      const response = await api.put(`/food/${id}.json`, { data })

      const filtered = recipes.map((recipe) => {
        if (recipe.id === id) {
          return { ...recipe, ...data }
        }
        return recipe
      })

      setRecipes(filtered)
      setOpen(open.name !== undefined ? data : ({} as Recipe))
    } catch (error) {
      toast.error(" ❌ Error on adding favourite recipe. ")
    }
  }

  async function getRecipe(id: string) {
    try {
      const response = await api.get(`/food/${id}.json`)
      const recipe = await response

      setOpen(recipe.data.data)
    } catch (error) {
      setError(true)
      toast.error(" ❌ Error on loading recipe. ")
    }
  }

  async function addRecipe(inputValue: RecipeAddInput) {
    try {
      let data = { ...inputValue, favourite: false }

      const response = await api.post(`/food.json`, { data })
      const addedRecipe = await response

      console.log(addedRecipe.data.name)

      setRecipes([...recipes, { id: addedRecipe.data.name, ...data }])

      toast.success("Recipe added!")
    } catch (error) {
      console.log(error)
      toast.error(" ❌ Error on adding recipe. ")
    }
  }

  async function updateRecipe(inputValue: Recipe) {
    try {
      let data = { ...inputValue }

      const response = await api.put(`/food/${editRecipe.id}.json`, { data })
      const updatedRecipe = await response

      const updated = updatedRecipe.data.data

      const allRecipes = recipes.map((recipe) => {
        if (recipe.id === updated.id) {
          return { ...updated }
        }
        return recipe
      })

      setRecipes(allRecipes)

      toast.success("Recipe updated!")
    } catch (error) {
      console.log(error)
      toast.error(" ❌ Error on updateding recipe. ")
    }
  }

  return (
    <RecipesContext.Provider
      value={{
        isSideNavOpen,
        closeSidenav,
        recipes,
        deleteRecipe,
        search,
        setSearch,
        favourites,
        setFavourites,
        addFavourite,
        open,
        getRecipe,
        error,
        addRecipe,
        setEditRecipe,
        editRecipe,
        updateRecipe,
      }}
    >
      {children}
    </RecipesContext.Provider>
  )
}

export function useRecipes(): RecipeContextData {
  const context = useContext(RecipesContext)

  return context
}
