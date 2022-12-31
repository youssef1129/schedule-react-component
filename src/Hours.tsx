import './styles/index.css';
import React, { MouseEventHandler, ReactNode, useState } from 'react'
import { Ihours } from '../src/interfaces/Ihours'
import { Dialog } from './Dialog';
import { CancelDialog } from './CancelDialog';


export interface hoursProps {
  hours: Array<Ihours>
  day?: number
  hourClass?: string
  onAdd: () => void;
  anim: number;
  dialogClass?: string;
  dialogTitle?: string;
  input?: ReactNode;
  cancelDialogTitle?: string;
  onCancel: () => void;
  cancelDialogClass?: string;
}

export const Hours = ({ hours, day, hourClass, onAdd, anim, dialogClass, dialogTitle, input,onCancel,cancelDialogClass,cancelDialogTitle }: hoursProps) => {
  const [display, setDisplay] = useState('none')
  const [display2, setDisplay2] = useState('none')

  return (
    <>
      <div className={`hours`} style={{ opacity: anim }}>
        {
          hours.map((h) => {
            return <>
              {
                (h.isReserved) || (h.val <= new Date().getHours() && new Date().getDate() === day)
                  ?
                  <button
                    className={`${hourClass && hourClass} hour disabled`}
                    key={h.val}
                    onClick={() => display2 === 'none' ? setDisplay2('flex') : setDisplay2('none')}
                  >
                    {h.hour}
                  </button>
                  :
                  <button
                    className={`${hourClass && hourClass} hour`}
                    key={h.val}
                    onClick={() => display === 'none' ? setDisplay('flex') : setDisplay('none')}
                  >
                    {h.hour}
                  </button>
              }
            </>
          })
        }
      </div>
      <CancelDialog display2={display2} setDisplay2={setDisplay2} onCancel={onCancel} cancelDialogClass={cancelDialogClass} cancelDialogTitle={cancelDialogTitle} />
      <Dialog children={input || <input />} display={display} setDisplay={setDisplay} onAdd={onAdd} dialogClass={dialogClass} dialogTitle={dialogTitle} />
    </>
  )
}
