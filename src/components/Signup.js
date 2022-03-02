import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from "@mui/material";
import React from "react";
import "./Signup.css";

const Signup = () => {
 
  const formSubmit = (e)=>{
    e.preventDefault();    
  }
  return (    
      <FormControl className='form'>  
      <h3>Create an account</h3>     
        <form onSubmit={formSubmit} >
          <FormHelperText id="my-helper-text-email">
            Enter your email
          </FormHelperText>
          <TextField id="outlined-basic" label="Email" variant="outlined" type="email" />          
          <FormHelperText id="my-helper-text-password">
            Enter your password.
          </FormHelperText>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button type="submit" variant='outlined'>Sign up</Button>
        </form>
      </FormControl>
    
  );
};

export default Signup;
