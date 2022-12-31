import React, { ReactNode, useEffect, useState } from 'react'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { Hours } from './Hours';
import { Ihours } from './interfaces/Ihours';
import { Ireservation } from './interfaces/Ireservation';

export interface calendarProps {
    daysOff: string[];
    hours: Array<Ihours>
    setHours: React.Dispatch<React.SetStateAction<Ihours[]>>
    OnAdd: () => void;
    reservations: Array<Ireservation>;
    calendarClass?: string;
    dayClass?: string;
    hourClass?: string;
    dialogClass?: string;
    dialogTitle?: string;
    input?: ReactNode;
    cancelDialogTitle?: string;
    onCancel: () => void;
    cancelDialogClass?: string;
}

export const Calendar = ({ onCancel,cancelDialogClass,cancelDialogTitle,input, daysOff, hours, OnAdd, reservations, setHours, calendarClass, dayClass, hourClass, dialogClass, dialogTitle }: calendarProps) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [day, setDay] = useState(0)
    const [numberDays, setNumberDays] = useState(getDaysInMonth(year, month))
    const [calendar, setCalendar] = useState<any>([])
    const [anim, setAnim] = useState(0)

    function getDaysInMonth(year: number, month: number) {
        return new Date(year, month + 1, 0).getDate();
    }
    const isCurrentDay = (day: number): boolean => {
        if (month === new Date().getMonth() && day + 1 === new Date().getDate()) {
            return true;
        }
        else {
            return false
        }
    }


    useEffect(() => {
        const arr = Array(numberDays).fill(0).map((_i, d) => {
            return { day: d + 1, name: new Date(year, month, d + 1).toString().split(' ')[0], isCurrentDay: isCurrentDay(d) }
        });

        setCalendar(arr)
    }, [month])

    const nextMonth = () => {
        month === 11 ? (setYear(year + 1), setMonth(0)) : setMonth((p) => p + 1)
        setNumberDays(getDaysInMonth(year, month + 1))
    }
    const prevMonth = () => {
        month === 0 ? (setYear(year - 1), setMonth(11)) : setMonth((p) => p - 1)
        setNumberDays(getDaysInMonth(year, month - 1))
    }


    const onDayClick = (d: number) => {

        setDay(d)
        const dayResrvs = reservations.filter((r) => (r.day === d && r.month === (month + 1) && r.year === year))
        setHours((p) => {
            return p.map((h) => {
                return { ...h, isReserved: false }
            })
        })


        dayResrvs.forEach((d) => {
            setHours((p) => {
                const s = p.map((h) => {
                    if (h.val === d.hour) {
                        return { ...h, isReserved: true }
                    }
                    return h
                })
                return s;
            })
        })


        setAnim(0)
        setTimeout(() => {
            setAnim(1)
        }, 300);
    }

    return (
        <>
            <div className={`calendar ${calendarClass && calendarClass}`}>
                <div className='header'>
                    <div onClick={prevMonth}>{<AiOutlineCaretLeft />}</div>
                    <label>{monthNames[month]} {year}</label>
                    <div onClick={nextMonth}>{<AiOutlineCaretRight />}</div>
                </div>
                <div className='days'>
                    {
                        calendar.map((d: any) => {
                            return (
                                <button key={d.day} disabled={(new Date(year, month + 1, day).getTime() < new Date().getTime()) || (d.day < new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) || (daysOff.includes(d.name))}
                                    onClick={() => onDayClick(d.day)}
                                    className={`day ${dayClass && dayClass}`}
                                >
                                    <label>{d.name}</label>
                                    <label className='dayLab'>{d.day}</label>
                                </button>
                            )
                        })
                    }
                </div>
            </div>

            <Hours onCancel={onCancel} cancelDialogClass={cancelDialogClass} cancelDialogTitle={cancelDialogTitle} input={input} hours={hours} onAdd={OnAdd} day={day} anim={anim} hourClass={hourClass} dialogClass={dialogClass} dialogTitle={dialogTitle} />
        </>
    )
}
