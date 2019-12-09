import * as React from 'react';
import { EventData } from '@App/store/reducers';
import styled from 'styled-components';
import { removeUnderscores } from '@App/components/utils';

type EventProps = {
  event: EventData,
};

const Body = styled.tbody`
    color: #02264c;
    font-family: Circular-Std,sans-serif;
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
    } = JSON.parse(event.payload);
    return (
        <Body key={event.id}>
            <tr>
                <Row>{new Date(timestamp).toDateString()}</Row>
                <Row>{new Date(timestamp).toLocaleTimeString('en-UK')}</Row>
                <Row>{removeUnderscores(event_type)}</Row>
                <Row>{fluid}</Row>
                <Row>{consumed_volume_ml}</Row>
                <Row>{task_schedule_note}</Row>
            </tr>
        </Body>
    );
};