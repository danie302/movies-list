import { Alert, Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import { registerUser } from "../services/authService";
import "./Signup.css";

const Signup = () => {

  const [alert, setAlert] = useState({
    message: '',
    severity: '',
    show: false
  })

  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const isNotEmpty = (value) => value.trim() !== '';
  const validLength = (value) => value.trim().length > 5;
  const isEmail = (value) => value.match(regex)
  
  const emailField = useForm(isEmail);
  const passwordField = useForm(validLength);
  const usernameField = useForm(isNotEmpty);
  
  const confirmPass = (value)=> value === passwordField.value;
  const confirmPasswordField = useForm(confirmPass);

  let formIsValid = false;

  if (emailField.isValid && passwordField.isValid && confirmPasswordField.isValid) {
    formIsValid = true;
  }
  
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      registerUser(usernameField.value,emailField.value, passwordField.value);
      emailField.resetHandler();
      passwordField.resetHandler();
      confirmPasswordField.resetHandler();
      setAlert({
        show: true,
        severity:"success",
        message: "User successfully added"
      });
       
    }else{
      setAlert({
        show: true,
        severity:"error",
        message: "Something went wrong"
      });      
    }
  };

  const emailIsValid = emailField.hasError ? "Enter a valid email" : "Email";
  const usernameIsValid = usernameField.hasError ? "Enter a user" : "User";
  const passwordIsValid = passwordField.hasError
    ? "Password must have at least 6 characters"
    : "Password";
  const confirmPasswordMessage = confirmPasswordField.hasError ? 'Passwords must match' : 'Confirm Password';
  


  return (
    <FormControl className="form-container">
      <form onSubmit={formSubmitHandler} className="form">
        <h3>Create an account</h3>
        <TextField
          error={usernameField.hasError}
          id="outlined-basic-username"
          label={usernameIsValid}
          variant="outlined"
          type="text"
          value={usernameField.value}
          onChange={usernameField.valueChangeHandler}
          onBlur={usernameField.blurHandler}
        />
        <TextField
          error={emailField.hasError}
          id="outlined-basic-email"
          label={emailIsValid}
          variant="outlined"
          type="email"
          value={emailField.value}
          onChange={emailField.valueChangeHandler}
          onBlur={emailField.blurHandler}
        />
        <TextField
          error={passwordField.hasError}
          id="outlined-password-pass"
          label={passwordIsValid}
          type="password"
          autoComplete="current-password"
          value={passwordField.value}
          onChange={passwordField.valueChangeHandler}
          onBlur={passwordField.blurHandler}
        />
        <TextField
          error={confirmPasswordField.hasError}
          id="outlined-password-confpass"
          label={confirmPasswordMessage}
          type="password"
          autoComplete="current-password"
          value={confirmPasswordField.value}
          onChange={confirmPasswordField.valueChangeHandler}
          onBlur={confirmPasswordField.blurHandler}
        />
        <Button type="submit" variant="outlined">
          Sign up
        </Button>
      {alert.show && <Alert severity={alert.severity}>{alert.message}</Alert>}
      </form>
    </FormControl>
  );
};

export default Signup;
