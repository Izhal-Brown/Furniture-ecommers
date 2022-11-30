import React from 'react'
import useAuth from '../costum-hooks/useAuth'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

  const { currentUser } = useAuth()

  return currentUser ? children : <Navigate to='/login' />
};

export default ProtectedRoute;