import React, { ReactNode } from 'react'
import { Calendar } from './Calendar'
import { Ihours } from './interfaces/Ihours';
import { Ireservation } from './interfaces/Ireservation';


const hrs: Array<Ihours> = [{ hour: '9-10', isReserved: false, val: 9 }, { hour: '10-11', isReserved: false, val: 10 }, { hour: '11-12', isReserved: false, val: 11 }, { hour: '13-14', isReserved: false, val: 13 }, { hour: '14-15', isReserved: false, val: 14 }, { hour: '15-16', isReserved: false, val: 15 }, { hour: '16-17', isReserved: false, val: 16 }]
const dOff = ['Sun', 'Sat']

export interface scheduleProps {
    /** the working hours example : [{ hour: '9-10', isReserved: false, val: 9 }, { hour: '10-11', isReserved: false, val: 10 }, { hour: '11-12', isReserved: false, val: 11 }, { hour: '13-14', isReserved: false, val: 13 }, { hour: '14-15', isReserved: false, val: 14 }, { hour: '15-16', isReserved: false, val: 15 }, { hour: '16-17', isReserved: false, val: 16 }] */
    workingHours?: Array<Ihours>
    /** the days you don't want to reserve example : ['Sun','Sat'] */
    daysOff?: string[];
    /** reservations data */
    reservations: Array<Ireservation>
    /** on add reservation */
    OnAdd: (day:number,month:number,year:number) => void;
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
    onCancel: (day:number,month:number,year:number) => void;
    /** cancel dialog css class */
    cancelDialogClass?: string;
}

export const Schedule = ({ onCancel,cancelDialogClass,cancelDialogTitle,input, dialogTitle, hourClass, OnAdd, workingHours = hrs, daysOff = dOff, reservations = [], calendarClass, dayClass, dialogClass }: scheduleProps) => {
    
    return (
        <div>
            <Calendar onCancel={onCancel} workingHours={workingHours} cancelDialogClass={cancelDialogClass} cancelDialogTitle={cancelDialogTitle} input={input} dialogTitle={dialogTitle} dialogClass={dialogClass} hourClass={hourClass} dayClass={dayClass} calendarClass={calendarClass} daysOff={daysOff} OnAdd={OnAdd}  reservations={reservations} />
        </div>
    )
}
