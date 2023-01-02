import React from 'react'
import styles from './style.module.css';

export interface cancelDialogProps {
    hour?:number;
    day?: number;
    month?:number;
    year?:number;
    cancelDialogTitle?: string;
    onCancel: (hour:number,day:number,month:number,year:number) => void;
    cancelDialogClass?: string;
    display2: string;
    setDisplay2: React.Dispatch<React.SetStateAction<string>>
}
export const CancelDialog = ({hour,day,month,year,cancelDialogTitle = 'Cancel reservation', onCancel, cancelDialogClass, display2 = 'none', setDisplay2 }: cancelDialogProps) => {
    const cancel = async() => {
        await onCancel(hour!,day!,month!+1,year!)
    }
    return (
        <div style={{ display: `${display2}` }} className={`${cancelDialogClass && cancelDialogClass} ${styles.dialog}`}>
            <div>
                <label>{cancelDialogTitle}</label>
                <div>
                    <button onClick={() => setDisplay2("none")}>no</button>
                    <button onClick={() => cancel().then(() => setDisplay2("none"))}>yes</button>
                </div>
            </div>
        </div >
    )
}
