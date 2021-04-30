import React from "react"
import Header from "../components/Header"
import { Switch, Route, Redirect } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import AddRecipe from "../pages/AddRecipe"
import EditRecipe from "../pages/EditRecipe"
import { ToastContainer } from "react-toastify"
import OpenRecipe from "../pages/OpenRecipe"
import LoginBoard from "../pages/LoginBoard"
import { useAuth } from "../hooks/useAuth"

const Routes = () => {
  const { currentUser } = useAuth()

  let routes = (
    <Switch>
      <Route path='/login' component={LoginBoard} />
      <Redirect to='/login' />
    </Switch>
  )

  if (currentUser) {
    routes = (
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/recipe/edit/:id' component={EditRecipe} />
        <Route exact path='/recipe/add' component={AddRecipe} />
        <Route exact path='/recipe/:id' component={OpenRecipe} />
        <Redirect to='/' />
      </Switch>
    )
  }

  return (
    <>
      <ToastContainer autoClose={2000} />

      {/*<Header />*/}
      {routes}
      {/*<Dashboard/>*/}
    </>
  )
}

export default Routes

/*

 <>
      <ToastContainer autoClose={2000} />

    
      <Switch>
        <Route path='/edit/:id' component={EditRecipe} />
        <Route path='/add' component={AddRecipe} />
        <Route path='/login' component={LoginBoard} />
        <Route path='/:id' component={OpenRecipe} />
        <Route exact path='/' component={Dashboard} />
        <Redirect to='/login' />
      </Switch>

    
    </>
*/
