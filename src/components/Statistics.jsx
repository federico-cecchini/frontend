import { useEffect, useState } from 'react';

import '../App.css';

function Statistics({ years, patients, percentage }) {
    const [countYears, setCountYears] = useState(0);
    const [countPatients, setCountPatients] = useState(0);
    const [countPercentage, setCountPercentage] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const step = Math.ceil(duration / 100);
        const totalSteps = Math.ceil(duration / step);

        const incrementYears = setInterval(() => {
            setCountYears(prev => {
                if (prev < years) return prev + Math.ceil(years / totalSteps);
                clearInterval(incrementYears);
                return years;
            });
        }, step);

        const incrementPatients = setInterval(() => {
            setCountPatients(prev => {
                if (prev < patients) return prev + Math.ceil(patients / totalSteps);
                clearInterval(incrementPatients);
                return patients;
            });
        }, step);

        const incrementPercentage = setInterval(() => {
            setCountPercentage(prev => {
                if (prev < percentage) return prev + Math.ceil(percentage / totalSteps);
                clearInterval(incrementPercentage);
                return percentage;
            });
        }, step);

        return () => {
            clearInterval(incrementYears);
            clearInterval(incrementPatients);
            clearInterval(incrementPercentage);
        };
    }, [years, patients, percentage]);

    return (
        <section className="flex flex-col md:h-fit md:flex-row absolute -top-9 w-[calc(100vw-10%)] rounded-xl gap-16 justify-around py-16 dark:bg-dark-secondary-bg shadow-lg">
            <div className="text-center">
                <h2 className="text-4xl font-bold dark:text-white text-dark">{countYears}{countYears === years ? "+" : ""}</h2>
                <p className="dark:text-white text-dark !text-opacity-55">Anni di esperienza</p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold dark:text-white text-dark">{countPatients}{countPatients === patients ? "+" : ""}</h2>
                <p className="dark:text-white text-dark !text-opacity-55">Clienti soddisfatti</p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold dark:text-white text-dark">{countPercentage}%</h2>
                <p className="dark:text-white text-dark !text-opacity-55">Recensione positive</p>
            </div>
        </section>
    );
}

export default Statistics;