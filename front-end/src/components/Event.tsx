import * as React from 'react';
import { EventData } from '@App/store/reducers';
import styled from 'styled-components';

type EventProps = {
  event: EventData,
};

const Body = styled.tr`
    font-size: 12px;
    text-align: center;
`;

const Row = styled.td`
    border: 2px solid #D8D8D8;
    padding: 4px 6px;
`;

export const Payload = ({event}: EventProps) => {
    const { timestamp,
        event_type,
        fluid,
        consumed_volume_ml,
        task_schedule_note,
        task_definition_description
    } = JSON.parse(event.payload);
    return (
        <Body key={event.id}>
            <Row>{new Date(timestamp).toDateString()}</Row>
            <Row>{event_type}</Row>
            <Row>{fluid}</Row>
            <Row>{consumed_volume_ml}</Row>
            <Row>{task_schedule_note}</Row>
            <Row>{task_definition_description}</Row>
        </Body>
    );
};