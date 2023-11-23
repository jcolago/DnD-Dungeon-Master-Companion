import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from "sweetalert2";
import { Container, Card, Button, FormControl, InputLabel, CardHeader, OutlinedInput, Typography } from "@mui/material";
import "./UserPage.css"


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const history = useHistory();
  const dispatch = useDispatch();


  let [gameName, setGameName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const game = { game_name: gameName }
    Swal.fire(
      'Game Created!',
      'Your game has been created!',
      'success'
    )
    dispatch({
      type: 'ADD_GAME',
      payload: game
    })
    setGameName('')
  }
  console.log(gameName)

  const games = useSelector((store) => store.games)
  const user = useSelector((store) => store.user);
  return (
    <>
      <div style={{ textAlign: "center" }} className="container">
        <Typography variant='h4' style={{ textDecoration: "underline" }}>Welcome, {user.username.charAt(0).toUpperCase() + user.username.slice(1)}!</Typography>
      </div>
      <Container className='user-container' style={{ border: "2px double black", }}>
        <div>

          <Card style={{ margin: "5px", marginTop: "20px", backgroundColor: "rgb(226, 232, 243, .7)", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            <div>
              <CardHeader style={{ textDecoration: "underline" }} title="Create A Game"></CardHeader>

              <form onSubmit={handleSubmit}>
                <div style={{ margin: "5px" }}>
                  <FormControl>
                    <Typography>
                      <InputLabel>Enter Game Name</InputLabel>
                      <OutlinedInput style={{ width: "250px" }} label="Enter Game Name" onChange={(event) => setGameName(event.target.value)} type='text' placeholder='Game Name' value={gameName} />
                      <Button style={{ margin: "5px" }} variant='contained' type='submit'>Submit</Button>
                    </Typography>
                  </FormControl>
                </div>
              </form>
            </div>
            <div style={{ justifyContent: 'flex-end' }}>
              <Typography variant='h6' style={{ textDecoration: "underline" }}>Your Games</Typography>
              {games.map(game => {
                return (
                  <Typography variant='body1'>{game.game_name} </Typography>
                )
              })}
            </div>
          </Card>
        
          <Card style={{ margin: "5px", marginBottom: "20px", backgroundColor: "rgb(226, 232, 243, .7)" }}>
            <center>
              <div style={{ margin: "5px" }}>
                <CardHeader style={{ textDecoration: "underline" }} title="Click To Navigate To An Entry Form or List" />
                <Button style={{ margin: "5px" }} variant='contained' onClick={() => history.push('/playerinfo')}>Player Entry Form</Button> <Button style={{ margin: "5px" }} variant='contained' onClick={() => history.push('/players')}>Character List</Button>  <Button style={{ margin: "5px" }} variant="contained" onClick={() => history.push('/monsterentry')}>Monster Entry Form</Button>
              </div>
            </center>
          </Card>
        </div>
      </Container>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
