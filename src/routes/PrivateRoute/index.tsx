import React from "react"
import { Redirect, Route } from "react-router"
import { useAuth } from "../../hooks/useAuth"

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { currentUser } = useAuth()
  return (
    <Route
      {...rest}
      render={(props) => {
        currentUser !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }}
    ></Route>
  )
}

export default PrivateRoute
