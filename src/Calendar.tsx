
import React, { ReactNode, useState, useEffect } from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { Hours } from './Hours';
import { Ihours } from './interfaces/Ihours';
import { Ireservation } from './interfaces/Ireservation';
import styles from './style.module.css';


export interface calendarProps {
    workingHours?: Array<Ihours>
    daysOff: string[];
    OnAdd: (hour: number, day: number, month: number, year: number) => void;
    reservations: Array<Ireservation>;
    calendarClass?: string;
    dayClass?: string;
    hourClass?: string;
    dialogClass?: string;
    dialogTitle?: string;
    input?: ReactNode;
    cancelDialogTitle?: string;
    onCancel: (hour: number, day: number, month: number, year: number) => void;
    cancelDialogClass?: string;
}

export const Calendar = ({ onCancel, cancelDialogClass, cancelDialogTitle, input, daysOff, OnAdd, reservations, calendarClass, dayClass, hourClass, dialogClass, dialogTitle, workingHours }: calendarProps) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [day, setDay] = useState(0)
    const [numberDays, setNumberDays] = useState(getDaysInMonth(year, month))
    const [calendar, setCalendar] = useState<any>([])
    const [anim, setAnim] = useState(0)
    const [hours, setHours] = useState(workingHours || [])

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
        onDayClick(day)
    }, [reservations])
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
            <div className={`${styles.calendar} ${calendarClass && calendarClass}`}>
                <div className={`${styles.header}`}>
                    <div onClick={prevMonth}>{<AiOutlineCaretLeft />}</div>
                    <label><span>{monthNames[month]}</span><span>{year}</span></label>
                    <div onClick={nextMonth}>{<AiOutlineCaretRight />}</div>
                </div>
                <div className={`${styles.days}`}>
                    {
                        calendar.map((d: any) => {
                            return (
                                <>
                                    {
                                        (new Date(year, month + 1, day).getTime() < new Date().getTime()) || (d.day < new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) || (daysOff.includes(d.name))
                                            ?
                                            <button key={d.day} disabled
                                                onClick={() => onDayClick(d.day)}
                                                className={`${styles.day}`}
                                            >
                                                <label>{d.name}</label>
                                                <label className={`${styles.dayLab}`}>{d.day}</label>
                                            </button>
                                            :
                                            <button key={d.day}
                                                onClick={() => onDayClick(d.day)}
                                                className={`${dayClass && dayClass} ${styles.day} `}
                                            >
                                                <label>{d.name}</label>
                                                <label className={`${styles.dayLab}`}>{d.day}</label>
                                            </button>
                                    }
                                </>

                            )
                        })
                    }
                </div>
            </div>

            <Hours month={month} year={year} onCancel={onCancel} cancelDialogClass={cancelDialogClass} cancelDialogTitle={cancelDialogTitle} input={input} hours={hours} onAdd={OnAdd} day={day} anim={anim} hourClass={hourClass} dialogClass={dialogClass} dialogTitle={dialogTitle} />
        </>
    )
}
