import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchInventorySaga() {
    try {
        const inventory = yield axios.get('/api/inventory');
        console.log('GET all inventory', inventory.data);
        yield put({ type: 'SET_INVENTORY', payload: inventory.data })
    } catch (error) {
        console.log('Error fetching inventory', error);
    }
}

function* addItemSaga(action) {
    try {
        yield axios({
            method: 'POST',
            url: `/api/inventory/${action.payload.id}`,
            data: action.payload
        })
        yield put({ type: 'FETCH_PLAYERS' })
    } catch (err) {
        console.log('Unable to add item to player', err)
    }
}

function* deleteItemSaga(action) {
    try {
        yield axios({
            method: 'DELETE',
            url: `/api/inventory/`,
            data: {id: action.payload}
        });
        yield put({ type: 'FETCH_PLAYERS' });
    } catch (err) {
        console.log('Unable to delete item', err)
    }
}



function* inventorySaga() {
    yield takeEvery("FETCH_INVENTORY", fetchInventorySaga);
    yield takeEvery("ADD_ITEM", addItemSaga);
    yield takeEvery("DELETE_ITEM", deleteItemSaga)
}

export default inventorySaga;