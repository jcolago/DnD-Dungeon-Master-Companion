import { all } from 'redux-saga/effects';
//Imports of sagas for use
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import playersSaga from './players.saga';
import inventorySaga from './inventory.saga';
import gamesSaga from './games.saga';
import conditionsSaga from './conditions.saga'
import monstersSaga from './monsters.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    //Sagas used for this project
    playersSaga(),
    inventorySaga(),
    conditionsSaga(),
    gamesSaga(),
    monstersSaga()
  ]);
}
