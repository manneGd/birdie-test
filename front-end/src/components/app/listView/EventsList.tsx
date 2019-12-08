import * as React from 'react';
import { EventData } from '@App/store/reducers';
import styled from 'styled-components';
import { Payload } from '@App/components/app/listView/Event';
import Pagination from '@App/components/app/listView/Pagination';

type EventsListProps = {
    events: EventData[],
};

const Table = styled.table`
    padding: 10px;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
`;

const Header = styled.thead`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    font-family: Circular-Std,sans-serif;
`;

const Th = styled.th`
    color: #02264c;
    border: 2px solid #D8D8D8;
    padding: 4px 6px;
  `;

const Footer = styled.tfoot`
    display: inline-flex;
    align-items: right;
`;

export const EventsList = ({events}: EventsListProps) => {
    return (
            <Table>
                <Header>
                    <tr>
                        <Th>Date</Th>
                        <Th>Time</Th>
                        <Th>Type</Th>
                        <Th>Fluid</Th>
                        <Th>Volume</Th>
                        <Th>Note</Th>
                        <Th>Description</Th>
                    </tr>
                </Header>
                {events.map(e =>
                    <Payload key={e.id} event={e} />
                )}
                <Footer>
                    <Pagination />
                </Footer>
            </Table>
    );
};