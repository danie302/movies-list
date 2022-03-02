import { Button, FormControl, TextField } from "@mui/material";
import React from "react";
import { useForm } from "../hooks/useForm";
import { registerUser } from "../services/authService";
import "./Signup.css";

const Signup = () => {
  const isNotEmpty = (value) => value.trim().length > 5;
  const isEmail = (value) => (value.includes("@") && value.includes('.com'));

  const emailField = useForm(isEmail);
  const passwordField = useForm(isNotEmpty);

  let formIsValid = false;

  if(emailField.isValid && passwordField.isValid){
    formIsValid = true;
  }

  const formSubmit = (e) => {
    e.preventDefault();
    if(formIsValid){
      registerUser(emailField.value, passwordField.value);
      emailField.resetHandler();
      passwordField.resetHandler();
    }
  };

  const emailIsValid = emailField.hasError ? "Enter a valid email" : "Email";
  const passwordIsValid = passwordField.hasError
    ? "Password must have at least 6 characters"
    : "Password";

  return (
    <FormControl className="form">
      <h3>Create an account</h3>
      <form onSubmit={formSubmit}>
        <TextField
          error={emailField.hasError}
          id="outlined-basic"
          label={emailIsValid}
          variant="outlined"
          type="email"
          value={emailField.value}
          onChange={emailField.valueChangeHandler}
          onBlur={emailField.blurHandler}
        />
        <TextField
          error={passwordField.hasError}
          id="outlined-password-input"
          label={passwordIsValid}
          type="password"
          autoComplete="current-password"
          value={passwordField.value}
          onChange={passwordField.valueChangeHandler}
          onBlur={passwordField.blurHandler}
        />
        <Button type="submit" variant="outlined">
          Sign up
        </Button>
      </form>
    </FormControl>
  );
};

export default Signup;
