import {
    ERROR_EVENTS,
    NEXT_EVENTS,
    PREVIOUS_EVENTS,
    RECEIVE_EVENTS,
    REQUEST_EVENTS
} from '@App/store/actions/constants';
import { initialState } from '@App/store/reducers/initialState';
import { Data } from '@App/store/reducers/index';
import { FetchActionType } from '@App/store/types';

export function eventsData(state: Data = initialState, action: FetchActionType): Data {
    switch (action.type) {
        case REQUEST_EVENTS:
        case PREVIOUS_EVENTS:
        case NEXT_EVENTS:
            return { ...state, loading: true };
        case RECEIVE_EVENTS:
            return { loading: false, page: action.payload.page, events: [...action.payload.events]};
        case ERROR_EVENTS:
            return { loading: false, page: 0, error_message: action.error_message};

        default:
            return state;
    }
}
