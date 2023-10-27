import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button, Typography, Container } from "@mui/material";
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
      

      <div className="grid">
        <div className="grid-col grid-col_8">
          <Container style={{border: "2px double black", backgroundColor: "rgb(128, 150, 191, .5)"}}>
          <Card style={{margin: "15px", padding: "10px", backgroundColor: "rgb(226, 232, 243, .7)"}}>
          <Typography variant='h2'>{heading}</Typography >
          <Typography variant='h5'>Welcome to the D&D Dungeon Master Companion App!</Typography> <Typography variant='h6'> This app was designed to help keep track of player characters for your specific games as well as keep a list of entered monsters for use.</Typography>
          <Typography typography="h6">Register now or log in if you already have an accout.</Typography>
          </Card>
          </Container>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <Typography style={{color: "white", textShadow: "2px 2px 4px black"}} variant='h5'>Already a Member?</Typography >
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
