import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

import firebase from "../config/firebase-config"

interface AuthProviderType {
  children: ReactNode
}
interface User {}

interface ContextProps {
  currentUser: User | null
}

//Context
const AuthContext = createContext<ContextProps>({} as ContextProps)

//Provider
export const AuthProvider = ({ children }: AuthProviderType) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
