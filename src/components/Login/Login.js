import {Alert, Button, FormControl, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { isEmail, isNotEmpty} from '../../helpers/validations';
import { useForm } from '../../hooks/useForm';
import { login } from '../../services/authService';
import { AuthContext } from '../../store/auth-context';
import { types } from '../../types/types';

const Login = () => {
  
  const [alert, setAlert] = useState({
    message: '',
    severity: '',
    show: false
  })
  const authCtx = useContext(AuthContext)
  const emailField = useForm(isEmail);
  const passwordField = useForm(isNotEmpty);
  let formIsValid = false;

  if (emailField.isValid && passwordField.isValid) {
    formIsValid = true;
  }

  const formSubmitHandler = async(event)=>{
    event.preventDefault();
    if(formIsValid){
      const user = await login(emailField.value, passwordField.value);   
      if(user.uid){
        const action={
          type: types.login,
          payload:{
            name: user.displayName,
            uid: user.uid
          }
        }
        authCtx.dispatch(action);        
        return;
      }   
      if(user.includes('auth/user-not-found') || user.includes('auth/wrong-password')){
        setAlert({
          message: 'Email o contraseña incorrectos',
          severity: 'error',
          show:true
        })        
      }             
    }
  }
  return (
    <FormControl className="form-container">
      <form onSubmit={formSubmitHandler} className="form">
        <h3>Login to your account</h3>
        <TextField          
          id="outlined-basic-username-login"
          label="Enter your email"
          variant="outlined"
          type="email"
          value={emailField.value}
          onChange={emailField.valueChangeHandler}
          onBlur={emailField.blurHandler}
        />
        <TextField          
          id="outlined-basic-password-login"
          label="Enter your password"
          variant="outlined"
          type="password"
          value={passwordField.value}
          onChange={passwordField.valueChangeHandler}
          onBlur={passwordField.blurHandler}
        />                
        <Button type="submit" variant="outlined">
          Login
        </Button>
        <p className="text-center">Do not have an account? <Link to="/signup">Register here</Link></p>
        {alert.show && <Alert severity={alert.severity}>{alert.message}</Alert>}
      </form>
    </FormControl>
  )
}

export default Login