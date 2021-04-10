import React from "react"
import { FavButton } from "./styles"
import { FaStar } from "react-icons/fa"

const Favourite = (): JSX.Element => {
  return (
    <FavButton>
      <FaStar color={"FDD277"} size={20} />
    </FavButton>
  )
}

export default Favourite
