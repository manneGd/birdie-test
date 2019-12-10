import { all, put, takeLatest } from 'redux-saga/effects';
import { errorEvents, receiveEvents, requestEvents } from '../actions';
import { EventData } from '@App/store/reducers';

let page = 0;

function* getEvents() {
    try {
        const responseJson: EventData[] = yield fetch(`http://localhost:8000/api/events?page=` + page)
            .then(response => response.json(), );
        yield put(receiveEvents(responseJson, page));
    } catch (err) {
        yield put(errorEvents(err));
    }
}

function* actionWatcher() {
    yield takeLatest(requestEvents, getEvents);
}

function* initSaga() {
    yield all([actionWatcher()]);
}

export default initSaga;