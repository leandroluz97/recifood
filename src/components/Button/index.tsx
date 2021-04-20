import React from "react"
import { useHistory } from "react-router"
import { useRecipes } from "../../hooks/useRecipes"
import { ButtonAction } from "./styles"

const Button = () => {
  const { closeSidenav } = useRecipes()
  let history = useHistory()

  function handleRoute() {
    history.push(`/add`)
    closeSidenav()
  }
  return <ButtonAction onClick={() => handleRoute()}>New Recipe</ButtonAction>
}

export default Button
