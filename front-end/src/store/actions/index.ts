import { ERROR_EVENTS, RECEIVE_EVENTS, REQUEST_EVENTS } from '@App/store/actions/constants';
import { EventData } from '@App/store/reducers';
import { FetchActionType } from '@App/store/types';

export function requestEvents(): FetchActionType {
    return {
        type: REQUEST_EVENTS
    };
}

export function receiveEvents(data: EventData[]): FetchActionType {
    return {
        type: RECEIVE_EVENTS,
        payload: data,
    };
}

export function errorEvents(error: string): FetchActionType {
    return {
        type: ERROR_EVENTS,
        error_message: error,
    };
}
