import { Ihours } from '../src/interfaces/Ihours'
import { Dialog } from './Dialog';
import { CancelDialog } from './CancelDialog';
import { ReactNode, useState } from 'react';
import React from 'react';
import styles from './style.module.css';

export interface hoursProps {
  hours: Array<Ihours>
  day?: number;
  month?:number;
  year?:number;
  hourClass?: string;
  onAdd: (hour:number,day:number,month:number,year:number) => void;
  anim: number;
  dialogClass?: string;
  dialogTitle?: string;
  input?: ReactNode;
  cancelDialogTitle?: string;
  onCancel: (hour:number,day:number,month:number,year:number) => void;
  cancelDialogClass?: string;
}

export const Hours = ({ hours, day,year,month, hourClass, onAdd, anim, dialogClass, dialogTitle, input,onCancel,cancelDialogClass,cancelDialogTitle }: hoursProps) => {
  const [display, setDisplay] = useState('none')
  const [display2, setDisplay2] = useState('none')
  const [currentHour,setCurrentHour] = useState(0)

  return (
    <>
      <div className={`${styles.hours}`} style={{ opacity: anim }}>
        {
          hours.map((h) => {
            return <>
              {
                (h.isReserved) || (h.val <= new Date().getHours() && new Date().getDate() === day)
                  ?
                  <button
                    className={`${styles.hour} ${styles.disabled}`}
                    key={h.val}
                    onClick={() => display2 === 'none' ? (setDisplay2('flex'),setCurrentHour(h.val)) : setDisplay2('none')}
                  >
                    {h.hour}
                  </button>
                  :
                  <button
                    className={`${hourClass && hourClass} ${styles.hour}`}
                    key={h.val}
                    onClick={() => display === 'none' ? (setDisplay('flex'),setCurrentHour(h.val)) : setDisplay('none')}
                  >
                    {h.hour}
                  </button>
              }
            </>
          })
        }
      </div>
      <CancelDialog hour={currentHour} day={day} month={month} year={year} display2={display2} setDisplay2={setDisplay2} onCancel={onCancel} cancelDialogClass={cancelDialogClass} cancelDialogTitle={cancelDialogTitle} />
      <Dialog hour={currentHour} day={day} month={month} year={year} children={input || <input />} display={display} setDisplay={setDisplay} onAdd={onAdd} dialogClass={dialogClass} dialogTitle={dialogTitle} />
    </>
  )
}
