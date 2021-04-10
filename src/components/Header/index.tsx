import React from "react"
import { Container } from "./styles"
import Logo from "../../assets/logo.svg"
import Favourite from "../Favourite"
import Button from "../Button"
import Search from "../Search"

const Header = () => {
  return (
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
      </header>
    </Container>
  )
}

export default Header
