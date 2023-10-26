import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button, FormControl, InputLabel, CardHeader, OutlinedInput, Typography } from "@mui/material";
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
   
    <div className="container">
      <Typography variant='h2'>{heading}</Typography >

      <div className="grid">
        <div className="grid-col grid-col_8">
          <Typography variant='h5'>Welcome to the D&D Dungeon Master Companion App!</Typography> <Typography variant='h6'> This app was designed to help keep track of player characters for your specific games as well as keep a list of entered monsters for use.</Typography>
          <Typography typography="h6">Register now or log in if you already have an accout.</Typography>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <Typography variant='h5'>Already a Member?</Typography >
            <Button variant='contained' className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </Button>
          </center>
        </div>
      </div>
    </div>
    
  );
}

export default LandingPage;
