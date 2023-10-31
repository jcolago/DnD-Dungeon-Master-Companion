import { put, take, takeEvery } from "redux-saga/effects";
import axios from "axios";

//fetches inventory data from database and sends it to the reducer to set state
function* fetchInventorySaga() {
    try {
        const inventory = yield axios.get('/api/inventory');
        console.log('GET all inventory', inventory.data);
        yield put({ type: 'SET_INVENTORY', payload: inventory.data })
    } catch (error) {
        console.log('Error fetching inventory', error);
    }
}

//Adds an item to player from details component and fetches the detailed data to rerender on all
function* addItemSaga(action) {
    try {
        yield axios({
            method: 'POST',
            url: `/api/inventory/${action.payload.id}`,
            data: action.payload
        })
        yield put({ type: "FETCH_PLAYER_DETAILS", payload: action.payload.id })
    } catch (err) {
        console.log('Unable to add item to player', err)
    }
}

//Sends a delete request to the server to delete an item from a player
function* deleteItemSaga(action) {
    try {
        console.log(action.payload)
        yield axios({
            method: 'DELETE',
            url: `/api/inventory/`,
            data: {id: action.payload.itemId}
        });
        yield put({ type: "FETCH_PLAYER_DETAILS", payload: action.payload.playerId })
    } catch (err) {
        console.log('Unable to delete item', err)
    }
}

//Sends a put request to the server to update the quantity of an item tied to a player
function* updateQuantitySaga(action) {
    try {
        console.log(action.payload) 
        yield axios ({
            method: 'PUT',
            url: `/api/inventory/`,
            data: {id: action.payload.id, quantity: action.payload.quantity}
        });
        yield put({ type: "FETCH_PLAYER_DETAILS", payload: id })
    } catch (err) {
        console.log('Unable to update condition length', err)
    }
}

//Watcher saga for all inventory sagas
function* inventorySaga() {
    yield takeEvery("FETCH_INVENTORY", fetchInventorySaga);
    yield takeEvery("ADD_ITEM", addItemSaga);
    yield takeEvery("DELETE_ITEM", deleteItemSaga);
    yield takeEvery("UPDATE_ITEM", updateQuantitySaga)
}
//Exports watcher saga for use in root saga file
export default inventorySaga;