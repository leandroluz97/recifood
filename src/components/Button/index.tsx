import React from "react"
import { useHistory } from "react-router"
import { ButtonAction } from "./styles"

const Button = () => {
  let history = useHistory()

  function handleRoute() {
    history.push(`/add`)
  }
  return <ButtonAction onClick={() => handleRoute()}>New Recipe</ButtonAction>
}

export default Button
