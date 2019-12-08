import { ERROR_EVENTS, RECEIVE_EVENTS, REQUEST_EVENTS } from '@App/store/actions/constants';
import { EventData } from '@App/store/reducers';

interface ActionRequest {
    type: typeof REQUEST_EVENTS;
}

interface ActionReceive {
    type: typeof RECEIVE_EVENTS;
    payload: EventData[];
}

interface ActionError {
    type: typeof ERROR_EVENTS;
    error_message: string;
}

export type FetchActionType = ActionRequest | ActionReceive | ActionError;
