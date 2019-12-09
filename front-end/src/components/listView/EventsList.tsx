import * as React from 'react';
import { EventData } from '@App/store/reducers';
import styled from 'styled-components';
import { Payload } from '@App/components/listView/Event';

type EventsListProps = {
    events: EventData[],
};

const Table = styled.table`
    border-collapse: collapse;
    padding: 10px;
    text-align: center;
    width: 100%;
`;

const Header = styled.thead`
    font-family: Circular-Std,sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`;

const Th = styled.th`
    color: #02264c;
    border: 2px solid #D8D8D8;
    padding: 4px 6px;
  `;

export const EventsList = ({events}: EventsListProps) => {
    return (
        <div>
            <Table>
                <Header>
                    <tr>
                        <Th>Date</Th>
                        <Th>Time</Th>
                        <Th>Type</Th>
                        <Th>Fluid</Th>
                        <Th>Volume</Th>
                        <Th>Note</Th>
                    </tr>
                </Header>
                {events.map(e =>
                    <Payload key={e.id} event={e} />
                )}
            </Table>
        </div>
    );
};