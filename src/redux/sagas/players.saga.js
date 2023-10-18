import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchPlayersSaga() {
    try {
        const players = yield axios.get('/api/players');
        console.log('GET all players', players.data);
        yield put ({ type: 'SET_PLAYERS', payload: players.data })
    } catch (error) {
        console.log('Error fetching players', error);
    }
}

function* fetchPlayerDetailsSaga(action) {
  try {
    console.log(action.payload);
    const response = yield axios.get(`api/players/${action.payload}`)
    console.log
    yield put ({ type: 'SET_PLAYER_DETAILS', payload: response.data})
  } catch (err) {
    console.log('Unable to fecth details of player with id:', err)
  }
}

function* deletePlayerSaga(action) {
    try {
        yield axios ({
            method: 'DELETE',
            url: `/api/players/${action.payload}`
        });
        yield put ({ type: 'FETCH_PLAYERS'});
    } catch (err) {
        console.log('Unable to delete player character', err)
    }
}

function* updatePlayerSaga(action) {
    try {
        yield axios ({
            method: 'PUT',
            url:`/api/players/${action.payload.id}`,
            data: action.payload,
        });
        yield put ({ type: 'FETCH_PLAYERS '})
    } catch (err) {
        console.log('Unable to update player character', err)
    }
}

function* addPlayerSaga(action) {
    try {
        yield axios ({
            method: 'POST',
            url:'/api/players',
            data: action.payload
        })
        yield put ({ type: 'FETCH_PLAYERS'})
    } catch (err) {
        console.log('Unable to add player', err)
    }
}

function* displayPlayerSaga(action) {
    try {
        yield axios ({
            method: 'PUT',
            url: `/api/players/display/${action.payload}`
        })
        yield put ({ type: 'FETCH_PLAYERS'})
    } catch (err) {
        console.log('Unable to set player to displayed', err)
    }
}

function* removePlayerSaga(action) {
    try {
        yield axios ({
            method: 'PUT',
            url: `/api/players/display/${action.payload}`
        })
        yield put ({ type: 'FETCH_PLAYERS'})
    } catch (err) {
        console.log('Unable to remove player from game display', err)
    }
}



function* playersSaga() {
    yield takeEvery("FETCH_PLAYERS", fetchPlayersSaga);
    yield takeEvery("DELETE_CHARACTER", deletePlayerSaga);
    yield takeEvery("UPDATE_CHARACTER", updatePlayerSaga);
    yield takeEvery("ADD_PLAYER", addPlayerSaga);
    yield takeEvery("DISPLAY_PLAYER", displayPlayerSaga);
    yield takeEvery("REMOVE_PLAYER", removePlayerSaga);
    yield takeEvery("FETCH_PLAYER_DETAILS", fetchPlayerDetailsSaga);
}

export default playersSaga;