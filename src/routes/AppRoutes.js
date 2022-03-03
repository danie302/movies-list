
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'

const AppRoutes = () => {
  return (
    <main>
          <Routes>
            <Route path='/' element={<Navigate replace to='/login' />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
    </main>    
  )
}

export default AppRoutes
