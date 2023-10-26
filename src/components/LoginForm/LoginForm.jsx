import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { Card, Button, FormControl, InputLabel, CardHeader, OutlinedInput } from "@mui/material";

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <Card style={{margin: "5px", backgroundColor: "rgb(226, 232, 243, .7)"}} >
      <CardHeader title="Login" ></CardHeader>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div style={{margin: "5px"}}>
        <center>
        <FormControl>
          <InputLabel htmlFor="username"> Username</InputLabel>
            <OutlinedInput
             style={{width: "250px" }}
            type="text"
            name="username"
            label="Username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormControl>
        </center>
      </div>
      <div style={{margin: "5px"}}>
        <center>
        <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            style={{width: "250px" }}
            type="password"
            name="password"
            label="Password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        
        </FormControl>
        </center>
      </div>
      <div>
        <Button variant="contained" style={{margin: "5px"}} className="btn" type="submit" name="submit" value="Log In" >Log In</Button>
      </div>
      </Card>
    </form>
  );
}

export default LoginForm;
