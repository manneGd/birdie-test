import { combineReducers } from 'redux';
import { eventsData } from '@App/store/reducers/events';

export type RootState = Readonly<{
    readonly data: Data;
}>;

export interface Data {
    readonly error_message?: string;
    readonly loading: boolean;
    readonly events?: EventData[];
}

export interface EventData {
    alert_id?: string;
    care_recipient_id: string;
    caregiver_id: string;
    event_type: string;
    id: string;
    observation_event_id?: string;
    payload: string;
    payload_as_text: string;
    rejected_event_id?: string;
    task_instance_id?: string;
    timestamp: string;
    visited_id: string;
}

export const rootReducer = combineReducers<RootState>({
    data: eventsData,
});
