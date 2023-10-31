import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

//Saga used to fetch games data from server and send data to reducer
function* fetchGamesSaga() {
    try {
        const games = yield axios.get('/api/games');
        console.log('GET all games', games.data);
        yield put({ type: 'SET_GAMES', payload: games.data })
    } catch (error) {
        console.log('Error fetching games', error);
    }
}

//Saga used to post a game to the games database then fetches the game data to rerender in app
function* addGameSaga(action) {
    try {
        yield axios({
            method: 'POST',
            url: '/api/games',
            data: action.payload
        })
        yield put({ type: 'FETCH_GAMES' })
    } catch (err) {
        console.log('Unable to add game', err)
    }
}


//watcher saga for all games sagas
function* gamesSaga() {
    yield takeEvery("FETCH_GAMES", fetchGamesSaga);
    yield takeEvery("ADD_GAME", addGameSaga)
}
//exports sagas for use in root saga file
export default gamesSaga;