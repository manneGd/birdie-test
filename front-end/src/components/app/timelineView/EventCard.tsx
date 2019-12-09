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
    width: 20px;
    height: 20px;
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
            titleStyle={{fontWeight: 'bold', fontSize: '16px'}}
            createdAt={new Date(timestamp).toLocaleString('en-UK')}
            icon={
                event_type.includes('observation') ? <Icon src={ObservationUrl}/> :
                event_type.includes('medication') ? <Icon src={MedicationUrl}/> :
                event_type.includes('task') ? <Icon src={TaskCompleteUrl}/> :
                <Icon src={DoctorUrl}/>}
            iconColor="#5ac5c1"
        >
            {fluid != null ? 'Fluid: ' + fluid : null}
            {consumed_volume_ml != null ? 'Volume: ' + consumed_volume_ml + 'mL' : null}
            {task_schedule_note != null ? 'Note: ' + task_schedule_note : null}
            {task_definition_description != null ? 'Description: ' + task_definition_description : null}
        </TimelineEvent>
    );
};