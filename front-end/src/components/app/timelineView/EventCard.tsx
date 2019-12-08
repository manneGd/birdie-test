import * as React from 'react';
import styled from 'styled-components';
import { EventData } from '@App/store/reducers';
import { TimelineEvent } from 'react-event-timeline';

const ObservationUrl = require('../../../assets/icons/observation.svg');
const MedicationUrl = require('../../../assets/icons/medication.svg');
const DoctorUrl = require('../../../assets/icons/doctor.svg');
const TaskCompleteUrl = require('../../../assets/icons/task_complete.svg');

type EventCardProps = {
    event: EventData,
};

const Icon = styled.img`
    width: 25px;
    height: 25px;
`;

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
            collapsible={
                (fluid != null && consumed_volume_ml != null)
                || (task_schedule_note != null && task_definition_description != null)}
            icon={
                event_type.includes('observation') ? <Icon src={ObservationUrl}/> :
                event_type.includes('medication') ? <Icon src={MedicationUrl}/> :
                event_type.includes('task') ? <Icon src={TaskCompleteUrl}/> :
                <Icon src={DoctorUrl}/>}
        >
            {fluid != null ? 'Fluid: ' + fluid + <br/> + 'Volume: ' + consumed_volume_ml : ''} <br/>
            {task_schedule_note != null ? 'Note: ' + task_schedule_note : ''}<br/>
            {task_definition_description != null ? 'Description: ' + task_definition_description : ''} <br/>
        </TimelineEvent>
    );
};