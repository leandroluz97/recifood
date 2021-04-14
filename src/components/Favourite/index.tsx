import React from "react"
import { FavButton } from "./styles"
import { FaStar } from "react-icons/fa"
import { useRecipes } from "../../hooks/useRecipes"

const Favourite = (): JSX.Element => {
  const { favourites, setFavourites } = useRecipes()

  return (
    <FavButton onClick={(e) => setFavourites(!favourites)}>
      <FaStar color={"FDD277"} size={20} />
    </FavButton>
  )
}

export default Favourite
