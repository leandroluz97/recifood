import React from "react"
import { Container } from "./styles"
import Logo from "../../assets/logo.svg"
import Favourite from "../Favourite"
import Button from "../Button"
import Search from "../Search"

import { FaBars } from "react-icons/fa"
import SideNav from "../SideNav"
import { useRecipes } from "../../hooks/useRecipes"
import { Link } from "react-router-dom"
import { IoClose } from "react-icons/io5"

const Header = () => {
  const { isSideNavOpen, closeSidenav, recipes } = useRecipes()

  return (
    <>
      <Container>
        <header>
          <Link to='/'>
            <img src={Logo} alt='logotipo' />
          </Link>
          <div className='header__content'>
            {/*<input type='text' placeholder='Search for recipes' />*/}
            <Search />
            <Favourite />
            <Button />

            {/* <button className='header__favourite'>F</button>*/}
            {/*<button className='header__newRecipe'>NEW RECIPE</button>*/}
          </div>
          <button className='header__icon' onClick={() => closeSidenav()}>
            {isSideNavOpen ? (
              <IoClose color={"FDD277"} size={30} />
            ) : (
              <FaBars color={"FDD277"} size={20} />
            )}
          </button>
        </header>
      </Container>
      <SideNav />
    </>
  )
}

export default Header
