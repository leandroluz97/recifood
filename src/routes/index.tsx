import React from "react"
import Header from "../components/Header"
import { Switch, Route } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import AddRecipe from "../pages/AddRecipe"
import EditRecipe from "../pages/EditRecipe"
import { ToastContainer } from "react-toastify"
import OpenRecipe from "../pages/OpenRecipe"
import LoginBoard from "../pages/LoginBoard"

const Routes = () => {
  return (
    <>
      <ToastContainer autoClose={2000} />

      {/*<Header />*/}

      <Switch>
        <Route path='/edit/:id' component={EditRecipe} />
        <Route path='/add' component={AddRecipe} />
        <Route path='/login' component={LoginBoard} />
        <Route path='/:id' component={OpenRecipe} />
        <Route path='/' component={Dashboard} />
      </Switch>

      {/*<Dashboard/>*/}
    </>
  )
}

export default Routes
