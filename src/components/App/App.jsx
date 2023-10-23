import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import './App.css';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import PlayerStatInfo from '../PlayerStatInfo/PlayerStatInfo';
import PlayersTable from '../PlayersTable/PlayersTable';
import PlayerInventoryInfo from '../PlayerInventoryInfo/PlayerInventoryInfo';
import Review from '../Review/Review';
import DetailsView from '../DetailsView/DetailsView';
import EditDetails from '../EditDetails/EditDetails';
import Success from '../Success/Success';
import MonstersTable from '../MonsterTable/MonsterTable';
import GameView from '../GameView/GameView';
import MonsterEntryFrom from '../MonsterEntryForm/MonsterEntryForm';
import MonsterSuccess from '../MonsterSuccess/MonsterSuccess';
import MonsterDetails from '../MonsterDetails/MonsterDetails';

function App() {
  const dispatch = useDispatch();
  
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
    dispatch({ type: "FETCH_PLAYERS"});
    dispatch({ type: "FETCH_INVENTORY"});
    dispatch({ type: "FETCH_MONSTERS"});
    dispatch({ type: "FETCH_CONDITIONS"})
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
              
            }
          </Route>
          <Route path= "/playerinfo">
            <PlayerInfo />
          </Route>
          <Route path="/stats">
            <PlayerStatInfo />
          </Route>
          <Route exact path="/playerinventory">
            <PlayerInventoryInfo />
          </Route>
          <Route exact path="/players">
            <PlayersTable />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path='/details/:id'>
            <DetailsView />
          </Route>
          <Route path='/edit/:id'>
            <EditDetails />
          </Route>
          <Route exact path="/monsterentry">
            <MonsterEntryFrom />
          </Route>
          <Route exact path="/monstersuccess">
            <MonsterSuccess />
          </Route>
          <Route path="/monsters">
            <MonstersTable />
          </Route>
          <Route exact path="/monsterdetails/:id">
            <MonsterDetails />
          </Route>
          <Route path="/gameview">
            <GameView />
          </Route>
          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
