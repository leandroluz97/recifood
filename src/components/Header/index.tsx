import React from "react"
import { Container } from "./styles"
import Logo from "../../assets/logo.svg"
import Favourite from "../Favourite"
import Button from "../Button"
import Search from "../Search"

import { FaBars } from "react-icons/fa"
import SideNav from "../SideNav"
import { useRecipes } from "../../hooks/useRecipes"
import { Link, useHistory } from "react-router-dom"
import { IoClose } from "react-icons/io5"

import firebase from "../../config/firebase-config"
import { useAuth } from "../../hooks/useAuth"

const Header = () => {
  const { isSideNavOpen, closeSidenav, recipes } = useRecipes()
  const { setCurrentUser } = useAuth()

  let history = useHistory()

  function handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setCurrentUser(null)
        history.push("/login")
      })
  }

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
          <button
            type='button'
            className='header__icon'
            onClick={() => closeSidenav()}
          >
            {isSideNavOpen ? (
              <IoClose color={"FDD277"} size={30} />
            ) : (
              <FaBars color={"FDD277"} size={20} />
            )}
          </button>
          <button type='button' onClick={handleLogout}>
            Logout
          </button>
        </header>
      </Container>
      <SideNav />
    </>
  )
}

export default Header
