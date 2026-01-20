import { useState } from 'react';
import '../App.css';

const openingHours = {
    "Monday": {start: "09:00", end: "21:30"},
    "Tuesday": {start: "07:30", end: "21:30"},
    "Wednesday": {start: "07:30", end: "21:30"},
    "Thursday": {start: "07:30", end: "21:30"},
    "Friday": {start: "07:30", end: "21:30"},
    "Saturday": {start: "07:30", end: "21:30"},
    "Sunday": {start: null, end: null}
};

const translation = {
    "Monday": "Lunedì",
    "Tuesday": "Martedì",
    "Wednesday": "Mercoledì",
    "Thursday": "Giovedì",
    "Friday": "Venerdì",
    "Saturday": "Sabato",
    "Sunday": "Domenica"
}

function TimeTable() {
    const [isOpen, setIsOpen] = useState(false);

    useState(() => {
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
        <div className='dark:bg-dark-bg rounded-xl p-8 flex flex-col xl:flex-row gap-6 font-Montserrat'>
            <div className="">
                <section className='flex flex-col gap-3'>
                    <p className={`font-medium text-xl ${isOpen ? 'text-cta-bg' : 'text-closed'}`}>{isOpen ? "Aperto" : "Chiuso"}</p>
                    <h1 className='font-bold text-2xl whitespace-nowrap text-white'>Orari di Apertura</h1>
                </section>
                <p className='dark:text-white text-black !text-opacity-55'>
                    Ricevo su appuntamento per garantire ad ogni paziente la massima attenzione e tranquillità durante il trattamento
                </p>
            </div>
            <table className='w-full text-left dark:text-white text-black table-fixed bg-dark-secondary-bg rounded-xl'>
                <tbody>
                    {Object.entries(
                        Object.entries(openingHours).reduce((acc, [day, hours]) => {
                            const key = hours.start && hours.end ? `${hours.start}-${hours.end}` : 'Chiuso';
                            if (!acc[key]) acc[key] = [];
                            acc[key].push(day);
                            return acc;
                        }, {})
                    ).map(([timeRange, days]) => (
                        <tr key={timeRange} className={`${days[0] !== 'Sunday' ? "border-b" : ""} border-gray-700`}>
                            <td className='py-3 px-4 opacity-55 w-1/2 truncate'>
                                {days.length >= 2 
                                    ? `${translation[days[0]]} - ${translation[days[days.length - 1]]}`
                                    : translation[days[0]]
                                }
                            </td>
                            <td className={`py-3 text-right px-4 font-semibold whitespace-nowrap ${timeRange === 'Chiuso' ? 'text-closed' : 'text-white'}`}>
                                {timeRange === 'Chiuso' ? 'Chiuso' : timeRange}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TimeTable;