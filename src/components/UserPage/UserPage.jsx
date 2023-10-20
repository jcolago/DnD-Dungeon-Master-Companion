import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const history = useHistory();
  const dispatch = useDispatch();

  let [gameName, setGameName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const game = {game_name: gameName}
    dispatch({ type: 'ADD_GAME', payload: game});
    setGameName('')
  }
  console.log(gameName)


  const user = useSelector((store) => store.user);
  return (
    <div>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
      </div>
      <div>
        <h2>Create A Game!</h2>
        <form onSubmit={handleSubmit}>
          <lable>Game Name:</lable>
          <input onChange={(event) => setGameName(event.target.value)} type='text' placeholder='Game Name' value={gameName} />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div>
        <h2>Click To Navigate To Player Entry or Chracter List!</h2>
        <button onClick={() => history.push('/playerinfo')}>Player Entry Form</button> <button onClick={() => history.push('/players')}>Character List</button>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
