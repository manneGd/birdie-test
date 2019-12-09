import * as React from 'react';
import styled from 'styled-components';
import { EventData } from '@App/store/reducers';
import { Timeline } from 'react-event-timeline';
import { EventCard } from '@App/components/timelineView/EventCard';

type TimelineProps = {
    events: EventData[]
};

const TimelineStyled = styled.div`
    position: relative;
    width: 85%;
`;

export const EventsTimeline = ({events}: TimelineProps) => {
    return (
        <TimelineStyled>
            <Timeline>
                {events.map(e =>
                    <EventCard key={e.id} event={e} />
                )}
            </Timeline>
        </TimelineStyled>
    );
};