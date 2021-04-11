import { Children, createContext, ReactNode, useState } from "react"

interface RecipeProviderArg {
  children: ReactNode
}
interface StateType {
  state: boolean
  setstate: () => void
}

interface StateType {
  state: boolean
}
const recipesContext = createContext({} as StateType)

const RecipesProvider = ({ children }: RecipeProviderArg) => {
  //const [state, setstate] = useState<StateType>(false)
  return <recipesContext.Provider value={}>{Children}</recipesContext.Provider>
}
