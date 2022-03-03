import { useReducer } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { authReducer } from './services/authService';
import { AuthContext } from './store/auth-context';

function App() {
  const [user, dispatch] = useReducer(authReducer, {uid:'', name:''})
  return (
    <AuthContext.Provider value={{user,dispatch}}>
    <main>
      <Routes>
        <Route path='/' element={<Navigate replace to='/login' />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </main>
    </AuthContext.Provider>
  );
}

export default App;
