import React from "react"
import { useRecipes } from "../../hooks/useRecipes"
import Button from "../Button"
import Favourite from "../Favourite"
import Logout from "../Logout"
import Search from "../Search"
import { Container } from "./styles"

const SideNav = () => {
  const { isSideNavOpen } = useRecipes()
  return (
    <Container isSideNavOpen={isSideNavOpen}>
      <div>
        <Search />
        <Favourite />
        <Logout />
        <Button />
      </div>
    </Container>
  )
}

export default SideNav
