import { all, put, takeLatest } from 'redux-saga/effects';
import { errorEvents, nextEvents, previousEvents, receiveEvents, requestEvents } from '../actions';
import { EventData } from '@App/store/reducers';

let page = 0;

function* getEvents() {
    try {
        const responseJson: EventData[] = yield fetch(`http://localhost:8000/events?page=` + page)
            .then(response => response.json(), );
        yield put(receiveEvents(responseJson, page));
    } catch (err) {
        yield put(errorEvents(err));
    }
}

function*  getPrevEvents() {
    page = page ===  0 ? 0 : page - 1;
    try {
        const responseJson: EventData[] = yield fetch(`http://localhost:8000/events?page=` + page)
            .then(response => response.json());

        yield put(receiveEvents(responseJson, page));
    } catch (err) {
        yield put(errorEvents(err));
    }
}

function* getNextEvents() {
    page = page ===  0 ? 0 : page + 1;
    try {
        const responseJson: EventData[] = yield fetch(`http://localhost:8000/events?page=` + page)
            .then(response => response.json());

        yield put(receiveEvents(responseJson, page));
    } catch (err) {
        yield put(errorEvents(err));
    }
}

function* actionWatcher() {
    yield takeLatest(requestEvents, getEvents);
    yield takeLatest(previousEvents, getPrevEvents);
    yield takeLatest(nextEvents, getNextEvents);
}

function* initSaga() {
    yield all([actionWatcher()]);
}

export default initSaga;