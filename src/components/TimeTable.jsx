import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'

import '../App.css';


function TimeTable() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation()

    const openingHours = {
        "Monday": {start: "09:00", end: "21:30"},
        "Tuesday": {start: "07:30", end: "21:30"},
        "Wednesday": {start: "07:30", end: "21:30"},
        "Thursday": {start: "07:30", end: "21:30"},
        "Friday": {start: "07:30", end: "21:30"},
        "Saturday": {start: "07:30", end: "21:30"},
        "Sunday": {start: null, end: null}
    };
    
    const translation = t("view_home.timetable.days", { returnObjects: true })

    useEffect(() => {
        const today = new Date().toLocaleString('en-US', { weekday: 'long', timeZone: 'Europe/Rome' });
        const hours = openingHours[today];
        
        if (hours.start && hours.end) {
            const now = new Date();
            const nowTime = now.getHours() * 60 + now.getMinutes();
            
            const [startH, startM] = hours.start.split(':').map(Number);
            const [endH, endM] = hours.end.split(':').map(Number);
            
            const startTime = startH * 60 + startM;
            const endTime = endH * 60 + endM;
            
            setIsOpen(nowTime >= startTime && nowTime <= endTime);
        } else {
            setIsOpen(false);
        }
    }, [isOpen, setIsOpen]);

    return (
        <div className='dark:bg-dark-bg bg-white rounded-xl p-8 flex flex-col xl:flex-row gap-6 font-Montserrat'>
            <div className="">
                <section className='flex flex-col gap-3'>
                    <p className={`font-medium text-xl ${isOpen ? 'text-cta-bg' : 'text-closed'}`}>{isOpen ? t("view_home.timetable.opened") : t("view_home.timetable.closed")}</p>
                    <h1 className='font-bold text-2xl whitespace-nowrap dark:text-white text-black'>{t("view_home.timetable.title")}</h1>
                </section>
                <p className='dark:text-white text-black !text-opacity-55'>
                    {t("view_home.timetable.desc")}
                </p>
            </div>
            <div className="w-full overflow-hidden rounded-xl border border-black dark:border-white/20">
                <table className='w-full table-fixed text-left dark:text-white text-black dark:bg-dark-secondary-bg bg-light-secondary-bg'>
                    <tbody>
                        {Object.entries(
                            Object.entries(openingHours).reduce((acc, [day, hours]) => {
                                const key = hours.start && hours.end ? `${hours.start}-${hours.end}` : t("view_home.timetable.closed");
                                if (!acc[key]) acc[key] = [];
                                acc[key].push(day);
                                return acc;
                            }, {})
                        ).map(([timeRange, days]) => (
                            <tr key={timeRange} className={`${days[0] !== 'Sunday' ? "border-b" : ""} border-gray-700`}>
                                <td className='py-3 px-4 opacity-55 dark:text-white text-black w-1/2 truncate'>
                                    {days.length >= 2 
                                        ? `${translation[days[0]]} - ${translation[days[days.length - 1]]}`
                                        : translation[days[0]]
                                    }
                                </td>
                                <td className={`py-3 text-right px-4 font-semibold whitespace-nowrap truncate ${timeRange === t("view_home.timetable.closed") ? 'text-closed' : 'dark:text-white text-black'}`}>
                                    {timeRange === t("view_home.timetable.closed") ? t("view_home.timetable.closed") : timeRange}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TimeTable;