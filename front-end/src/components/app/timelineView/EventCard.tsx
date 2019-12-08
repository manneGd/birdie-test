import * as React from 'react';
import { EventData } from '@App/store/reducers';
import { TimelineEvent } from 'react-event-timeline';

type EventCardProps = {
    event: EventData,
};

export const EventCard = ({event}: EventCardProps) => {
    const { timestamp,
        event_type,
        fluid,
        consumed_volume_ml,
        task_schedule_note,
        task_definition_description
    } = JSON.parse(event.payload);
    return (
        <TimelineEvent
            title={event_type}
            createdAt={new Date(timestamp).toLocaleString('en-UK')}
        >
            {fluid != null ? 'Fluid: ' + fluid + '\n Volume: ' + consumed_volume_ml : ''}
          Note: {task_schedule_note}<br/>
          Description: {task_definition_description} <br/>
        </TimelineEvent>
    );
};