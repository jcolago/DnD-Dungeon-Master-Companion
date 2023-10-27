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
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: "FETCH_PLAYERS"});
    dispatch({ type: "FETCH_INVENTORY"});
    dispatch({ type: "FETCH_MONSTERS"});
    dispatch({ type: "FETCH_CONDITIONS"});
    dispatch({ type: "FETCH_GAMES"})
  }, [user])

  return (
    <Router>
      <div style={{backgroundImage: "url(/public/images/dice2.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"}}>
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
          <ProtectedRoute path= "/playerinfo">
            <PlayerInfo />
          </ProtectedRoute>
          <ProtectedRoute path="/stats">
            <PlayerStatInfo />
          </ProtectedRoute>
          <ProtectedRoute exact path="/playerinventory">
            <PlayerInventoryInfo />
          </ProtectedRoute>
          <ProtectedRoute exact path="/players">
            <PlayersTable />
          </ProtectedRoute>
          <ProtectedRoute path="/review">
            <Review />
          </ProtectedRoute>
          <ProtectedRoute path="/success">
            <Success />
          </ProtectedRoute>
          <ProtectedRoute path='/details/:id'>
            <DetailsView />
          </ProtectedRoute>
          <ProtectedRoute path='/edit/:id'>
            <EditDetails />
          </ProtectedRoute>
          <ProtectedRoute exact path="/monsterentry">
            <MonsterEntryFrom />
          </ProtectedRoute>
          <ProtectedRoute exact path="/monstersuccess">
            <MonsterSuccess />
          </ProtectedRoute>
          <ProtectedRoute path="/monsters">
            <MonstersTable />
          </ProtectedRoute>
          <ProtectedRoute exact path="/monsterdetails/:id">
            <MonsterDetails />
          </ProtectedRoute>
          <ProtectedRoute path="/gameview">
            <GameView />
          </ProtectedRoute>
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
