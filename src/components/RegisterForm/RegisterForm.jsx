import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, FormControl, InputLabel, CardHeader, OutlinedInput } from "@mui/material";

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
       <Card >
      <CardHeader style={{textDecoration: "underline"}} title="Register User" ></CardHeader>
      
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div style={{margin: "5px"}} >
        <center>
        <FormControl>
        <InputLabel htmlFor="username">Username</InputLabel>
          
          <OutlinedInput
            style={{width: "250px" }}
            type="text"
            name="username"
            label="Username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        
        </FormControl>
        </center>
      </div>
      <div style={{margin: "5px"}} >
        <center>
        <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            style={{width: "250px" }}
            type="password"
            name="password"
            label="Password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
        </center>
      </div>
      <div>
        <Button style={{margin: "5px"}}  variant="contained" className="btn" type="submit" name="submit" value="Register">Register</Button>
      </div>
      </Card>
    </form>
  );
}

export default RegisterForm;
