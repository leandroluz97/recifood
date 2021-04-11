import React from "react"
import Button from "../Button"
import Favourite from "../Favourite"
import Search from "../Search"
import { Container } from "./styles"

const SideNav = () => {
  return (
    <Container>
      <div>
        <Search />
        <Favourite />
        <Button />
      </div>
    </Container>
  )
}

export default SideNav
