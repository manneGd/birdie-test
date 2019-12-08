import * as React from 'react';
import { EventData } from '@App/store/reducers';
import { Timeline } from 'react-event-timeline';
import { EventCard } from '@App/components/app/timelineView/EventCard';

type TimelineProps = {
    events: EventData[]
};

export const EventsTimeline = ({events}: TimelineProps) => {
    return (
        <Timeline>
            {events.map(e =>
                <EventCard key={e.id} event={e} />
            )}
        </Timeline>
    );
};