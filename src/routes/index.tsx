import React from "react"
import Header from "../components/Header"
import { Switch, Route } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import AddRecipe from "../pages/AddRecipe"
import EditRecipe from "../pages/EditRecipe"

const Routes = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route path='/edit/:id' component={EditRecipe} />
        <Route path='/add' component={AddRecipe} />
        {/*<Route path='/:id' component={} />*/}
        <Route path='/' component={Dashboard} />
      </Switch>

      {/*<Dashboard/>*/}
    </>
  )
}

export default Routes
