import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

//Sends request to server to get players data and sends response to reducer to set state
function* fetchPlayersSaga() {
    try {
        const response = yield axios.get('/api/players');
        console.log('GET all players', response.data);
        yield put({ type: 'SET_PLAYERS', payload: response.data })
    } catch (error) {
        console.log('Error fetching players', error);
    }
}

//Sends request to fetch a specific players data for use on the details view component
function* fetchPlayerDetailsSaga(action) {
    try {
        console.log(action.payload);
        const response = yield axios.get(`api/players/${action.payload}`)
        yield put({ type: 'SET_PLAYER_DETAILS', payload: response.data })
    } catch (err) {
        console.log('Unable to fecth details of player with id:', err)
    }
}

//Sends request to back end to delete a player from the database
function* deletePlayerSaga(action) {
    try {
        yield axios({
            method: 'DELETE',
            url: `/api/players/${action.payload}`
        });
        yield put({ type: 'FETCH_PLAYERS' });
    } catch (err) {
        console.log('Unable to delete player character', err)
    }
}

//Sends data to server to be updated in database
function* updatePlayerSaga(action) {
    try {
        yield axios({
            method: 'PUT',
            url: `/api/players/${action.payload.id}`,
            data: action.payload
        });
        yield put({ type: 'FETCH_PLAYERS ' })
    } catch (err) {
        console.log('Unable to update player character', err)
    }
}

//Sends data to be added to players table from player entry form
function* addPlayerSaga(action) {
    try {
        yield axios({
            method: 'POST',
            url: '/api/players',
            data: action.payload
        })
        yield put({ type: 'FETCH_PLAYERS' })
    } catch (err) {
        console.log('Unable to add player', err)
    }
}

//Sends request to server to set a player to be displayed on game view
function* displayPlayerSaga(action) {
    try {
        yield axios({
            method: 'PUT',
            url: `/api/players/display/${action.payload}`
        })
        yield put({ type: 'FETCH_PLAYERS' })
    } catch (err) {
        console.log('Unable to set player to displayed', err)
    }
}

//Sends request to server to remove a player from game view
function* removePlayerSaga(action) {
    try {
        yield axios({
            method: 'PUT',
            url: `/api/players/remove/${action.payload}`
        })
        yield put({ type: 'FETCH_PLAYERS' })
    } catch (err) {
        console.log('Unable to remove player from game display', err)
    }
}

//Sends request to server to update a player's hit points
function* updateHpSaga(action) {
  try {
    console.log(action.payload)
    yield axios({
        method: 'PUT',
        url: '/api/players',
        data: action.payload
    })
    yield put({ type: 'FETCH_PLAYERS'})
  } catch (err) {
    console.log('Unable to update player hit points', err)
  }
}


//Watcher saga for all players sagas
function* playersSaga() {
    yield takeEvery("FETCH_PLAYERS", fetchPlayersSaga);
    yield takeEvery("DELETE_CHARACTER", deletePlayerSaga);
    yield takeEvery("UPDATE_CHARACTER", updatePlayerSaga);
    yield takeEvery("ADD_PLAYER", addPlayerSaga);
    yield takeEvery("DISPLAY_PLAYER", displayPlayerSaga);
    yield takeEvery("REMOVE_PLAYER", removePlayerSaga);
    yield takeEvery("FETCH_PLAYER_DETAILS", fetchPlayerDetailsSaga);
    yield takeEvery("UPDATE_HIT_POINTS", updateHpSaga)
}
//Exports watcher saga for use in root saga file
export default playersSaga;