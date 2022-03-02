import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Navigate replace to='/login' />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </main>
  );
}

export default App;
