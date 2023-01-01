import React, { ReactNode } from 'react'

export interface dialogProps {
    dialogTitle?: string;
    onAdd: () => void;
    children: ReactNode;
    dialogClass?: string;
    display: string;
    setDisplay: React.Dispatch<React.SetStateAction<string>>
}

export const Dialog = ({ children, dialogTitle = 'title', onAdd, dialogClass, display = 'none', setDisplay }: dialogProps) => {
    const add = async () => {
        await onAdd()
    }
    return (
        <div style={{ display: `${display}` }} className={`${dialogClass && dialogClass} dialog`}>
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
