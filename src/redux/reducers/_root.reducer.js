import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import players from './players.reducer';
import monsters from './monster.reducer';
import games from './games.reducer';
import inventory from './inventory.reducer';
import conditions from './conditions.reducer';
import stats from './stats.reducer';
import backpack from './itemsarray.reducer';
import playersInfo from './playerinfo.reducer'
import details from './playerdetails.reducer'


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  players,
  monsters,
  games,
  inventory,
  conditions,
  stats,
  backpack,
  playersInfo,
  details
});

export default rootReducer;
