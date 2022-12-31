import React from 'react'

export interface cancelDialogProps {
    cancelDialogTitle?: string;
    onCancel: () => void;
    cancelDialogClass?: string;
    display2: string;
    setDisplay2: React.Dispatch<React.SetStateAction<string>>
}
export const CancelDialog = ({cancelDialogTitle = 'Cancel reservation', onCancel, cancelDialogClass, display2 = 'none', setDisplay2 }: cancelDialogProps) => {
    const cancel = async() => {
        await onCancel()
    }
    return (
        <div style={{ display: `${display2}` }} className={`${cancelDialogClass && cancelDialogClass} dialog`}>
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
