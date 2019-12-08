import { all, put, takeLatest } from 'redux-saga/effects';
import { errorEvents, receiveEvents, requestEvents } from '../actions';
import { EventData } from '@App/store/reducers';

function* getEvents() {
    try {
        const responseJson: EventData[] = yield fetch(`http://localhost:8000/events`)
            .then(response => response.json(), );
        yield put(receiveEvents(responseJson));
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