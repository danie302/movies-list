import { useReducer } from 'react';
import './App.css';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';
import { authReducer } from './services/authService';
import { AuthContext } from './store/auth-context';

function App() {
  const [user, dispatch] = useReducer(authReducer, {uid:'', name:''})
  return (
    <AuthContext.Provider value={{user,dispatch}}>
      <Header image='' />
      <AppRoutes />
    </AuthContext.Provider>
  );
}

export default App;
