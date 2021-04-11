import React from "react"
import { Container } from "./styles"
import Logo from "../../assets/logo.svg"
import Favourite from "../Favourite"
import Button from "../Button"
import Search from "../Search"

import { FaBars } from "react-icons/fa"
import SideNav from "../SideNav"

const Header = () => {
  return (
    <>
      <Container>
        <header>
          <img src={Logo} alt='logotipo' />
          <div className='header__content'>
            {/*<input type='text' placeholder='Search for recipes' />*/}
            <Search />
            <Favourite />
            <Button />

            {/* <button className='header__favourite'>F</button>*/}
            {/*<button className='header__newRecipe'>NEW RECIPE</button>*/}
          </div>
          <div className='header__icon'>
            <FaBars color={"FDD277"} size={20} />
          </div>
        </header>
      </Container>
      <SideNav />
    </>
  )
}

export default Header
