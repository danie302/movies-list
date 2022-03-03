import { useReducer } from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { authReducer } from './services/authService';
import { AuthContext } from './store/auth-context';

function App() {
  const [user, dispatch] = useReducer(authReducer, {uid:'', name:''})
  return (
    <AuthContext.Provider value={{user,dispatch}}>
      <AppRoutes />
    </AuthContext.Provider>
  );
}

export default App;
