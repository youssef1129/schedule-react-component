import React, { ReactNode } from 'react'
import styles from './style.module.css';

export interface dialogProps {
    day?: number;
    month?:number;
    year?:number;
    dialogTitle?: string;
    onAdd: (day:number,month:number,year:number) => void;
    children: ReactNode;
    dialogClass?: string;
    display: string;
    setDisplay: React.Dispatch<React.SetStateAction<string>>
}

export const Dialog = ({ day,month,year,children, dialogTitle = 'title', onAdd, dialogClass, display = 'none', setDisplay }: dialogProps) => {
    const add = async () => {
        await onAdd(day!,month!,year!)
    }
    return (
        <div style={{ display: `${display}` }} className={`${dialogClass && dialogClass} ${styles.dialog}`}>
            <div>
                <label>{dialogTitle}</label>
                <div>
                    {children || <input />}
                </div>
                <div>
                    <button onClick={() => setDisplay("none")}>Cancel</button>
                    <button onClick={() => add().then(() => setDisplay("none"))}>Add</button>
                </div>
            </div>
        </div >
    )
}
