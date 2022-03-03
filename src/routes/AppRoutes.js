
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'

const AppRoutes = () => {
  return (
    <main>
          <Routes>
            <Route path='/' element={<Navigate replace to='/login' />}/>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
          </Routes>
    </main>    
  )
}

export default AppRoutes
