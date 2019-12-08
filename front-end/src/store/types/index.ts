import {
    ERROR_EVENTS,
    NEXT_EVENTS,
    PREVIOUS_EVENTS,
    RECEIVE_EVENTS,
    REQUEST_EVENTS
} from '@App/store/actions/constants';
import { EventData } from '@App/store/reducers';

interface ActionRequest {
    type: typeof REQUEST_EVENTS;
}

interface ActionReceive {
    type: typeof RECEIVE_EVENTS;
    payload: {
        events: EventData[],
        page: number,
    };
}

interface ActionError {
    type: typeof ERROR_EVENTS;
    error_message: string;
}

interface ActionPrevious {
    type: typeof PREVIOUS_EVENTS;
}

interface ActionNext {
    type: typeof NEXT_EVENTS;
}

export type FetchActionType = ActionRequest | ActionReceive | ActionError | ActionNext | ActionPrevious;
