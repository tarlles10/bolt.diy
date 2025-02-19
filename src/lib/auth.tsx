import React, { createContext, useState, useContext, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Initial state, adjust as needed
  const navigate = useNavigate()

  const login = () => {
    setIsLoggedIn(true)
    // Redirect to dashboard or intended page after login
    navigate('/dashboard')
  }

  const logout = () => {
    setIsLoggedIn(false)
    navigate('/login')
  }

  const value: AuthContextType = {
    isLoggedIn,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
