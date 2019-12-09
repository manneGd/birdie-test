import * as React from 'react';
import styled from 'styled-components';
import { EventData } from '@App/store/reducers';
import { TimelineEvent } from 'react-event-timeline';
import { removeUnderscores } from '@App/components/utils';

const DoctorUrl = require('../../assets/icons/doctor.svg');
const MedicationUrl = require('../../assets/icons/medication.svg');
const ObservationUrl = require('../../assets/icons/observation.svg');
const TaskCompleteUrl = require('../../assets/icons/task_complete.svg');

type EventCardProps = {
    event: EventData,
};

const Icon = styled.img`
    height: 20px;
    width: 20px;
`;

const EmptyNoteCard = ({event}: EventCardProps) => {
    const {
        event_type,
        timestamp,
    } = JSON.parse(event.payload);
    return (
        <TimelineEvent
            title={removeUnderscores(event_type)}
            titleStyle={{fontWeight: 'bold', fontSize: '16px'}}
            createdAt={new Date(timestamp).toLocaleString('en-UK')}
            icon={
                event_type.includes('observation') ? <Icon src={ObservationUrl}/> :
                    event_type.includes('medication') ? <Icon src={MedicationUrl}/> :
                        event_type.includes('task') ? <Icon src={TaskCompleteUrl}/> :
                            <Icon src={DoctorUrl}/>}
            iconColor="#5ac5c1"
        />
    );
};

const NoteCard = ({event}: EventCardProps) => {
    const {
        consumed_volume_ml,
        event_type,
        fluid,
        task_schedule_note,
        timestamp,
    } = JSON.parse(event.payload);
    return (
        <TimelineEvent
            title={removeUnderscores(event_type)}
            titleStyle={{fontWeight: 'bold', fontSize: '16px'}}
            createdAt={new Date(timestamp).toLocaleString('en-UK')}
            icon={
                event_type.includes('observation') ? <Icon src={ObservationUrl}/> :
                    event_type.includes('medication') ? <Icon src={MedicationUrl}/> :
                        event_type.includes('task') ? <Icon src={TaskCompleteUrl}/> :
                            <Icon src={DoctorUrl}/>}
            iconColor="#5ac5c1"
        >
            {fluid != null ? <span> Fluid: {fluid} <br/></span> : null}
            {consumed_volume_ml != null ? <span> Volume: {consumed_volume_ml} mL <br/></span> : null}
            {task_schedule_note != null ? <span>Note: {task_schedule_note} <br/></span> : null}
        </TimelineEvent>
    );
};

export const EventCard = ({event}: EventCardProps) => {
    const {
        consumed_volume_ml,
        fluid,
        task_schedule_note,
    } = JSON.parse(event.payload);
    return (
        <div>
            { fluid == null
            && consumed_volume_ml == null
            && task_schedule_note == null ?
                <EmptyNoteCard event={event}/>
                :
                <NoteCard event={event}/>
            }
        </div>
    );
};