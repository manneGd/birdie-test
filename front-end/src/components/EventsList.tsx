import * as React from 'react';
import { EventData } from '@App/store/reducers';
import { Payload } from '@App/components/Event';
import styled from 'styled-components';

type EventsListProps = {
    events: EventData[],
};

const Table = styled.table`
    with: 100%;
    text-align: center;
`;

const Header = styled.tr`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
`;

const Th = styled.th`
    border: 2px solid #D8D8D8;
    padding: 4px 6px;
  `;

export const EventsList = ({events}: EventsListProps) => {
    return (
        <Table>
            <Header>
                <Th>Date</Th>
                <Th>Type</Th>
                <Th>Fluid</Th>
                <Th>Volume</Th>
                <Th>Note</Th>
                <Th>Description</Th>
            </Header>
            {events.map(e =>
                <Payload key={e.id} event={e} />
            )}
        </Table>
    );
};