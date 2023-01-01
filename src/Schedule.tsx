import React, { ReactNode, useState } from 'react'
import { Calendar } from './Calendar'
import { Ihours } from './interfaces/Ihours';
import { Ireservation } from './interfaces/Ireservation';
import './styles/index.css';

const hrs: Array<Ihours> = [{ hour: '9-10', isReserved: false, val: 9 }, { hour: '10-11', isReserved: false, val: 10 }, { hour: '11-12', isReserved: false, val: 11 }, { hour: '13-14', isReserved: false, val: 13 }, { hour: '14-15', isReserved: false, val: 14 }, { hour: '15-16', isReserved: false, val: 15 }, { hour: '16-17', isReserved: false, val: 16 }]
const dOff = ['Sun', 'Sat']

// const reservs: Array<Ireservation> = [
//     { date: "2023-01-06T00:00:00.000Z", day: 6, hour: 14, id: 1, month: 1, year: 2023 },
//     { date: "2023-01-06T00:00:00.000Z", day: 6, hour: 15, id: 1, month: 1, year: 2023 },
//     { date: "2023-01-07T00:00:00.000Z", day: 7, hour: 16, id: 1, month: 1, year: 2023 }
// ]

export interface scheduleProps {
    /** the working hours example : [{ hour: '9-10', isReserved: false, val: 9 }, { hour: '10-11', isReserved: false, val: 10 }, { hour: '11-12', isReserved: false, val: 11 }, { hour: '13-14', isReserved: false, val: 13 }, { hour: '14-15', isReserved: false, val: 14 }, { hour: '15-16', isReserved: false, val: 15 }, { hour: '16-17', isReserved: false, val: 16 }] */
    workingHours?: Array<Ihours>
    /** the days you don't want to reserve example : ['Sun','Sat'] */
    daysOff?: string[];
    /** reservations data */
    reservations: Array<Ireservation>
    /** on add reservation */
    OnAdd: () => void;
    /** calendar css class */
    calendarClass?: string;
    /** day css class */
    dayClass?: string;
    /** hour css class */
    hourClass?: string
    /** dialog css class */
    dialogClass?: string;
    /** dialog title */
    dialogTitle?: string;
    /** choose the dialog input or select ... */
    input?: ReactNode
    /** cancel dialog title */
    cancelDialogTitle?: string;
    /** on cancecl reservation function */
    onCancel: () => void;
    /** cancel dialog css class */
    cancelDialogClass?: string;
}

export const Schedule = ({ onCancel,cancelDialogClass,cancelDialogTitle,input, dialogTitle, hourClass, OnAdd, workingHours = hrs, daysOff = dOff, reservations = [], calendarClass, dayClass, dialogClass }: scheduleProps) => {
    const [hours, setHours] = useState(hrs)
    return (
        <div>
            <Calendar onCancel={onCancel} cancelDialogClass={cancelDialogClass} cancelDialogTitle={cancelDialogTitle} input={input} dialogTitle={dialogTitle} dialogClass={dialogClass} hourClass={hourClass} dayClass={dayClass} calendarClass={calendarClass} daysOff={daysOff} OnAdd={OnAdd} hours={hours} setHours={setHours} reservations={reservations} />
        </div>
    )
}
