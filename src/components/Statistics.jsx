import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'

import '../App.css';

function Statistics({ years, patients, percentage, hours, office, suggested }) {
    const [countYears, setCountYears] = useState(0);
    const [countPatients, setCountPatients] = useState(0);
    const [countPercentage, setCountPercentage] = useState(0);
    const [countHours, setCountHours] = useState(0);
    const [countOffice, setCountOffice] = useState(0);
    const [countSuggested, setCountSuggested] = useState(0);


    const { t } = useTranslation()

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
        
        const incrementHours = setInterval(() => {
            setCountHours(prev => {
                if (prev < hours) return prev + Math.ceil(hours / totalSteps);
                clearInterval(incrementHours);
                return hours;
            });
        }, step);

        const incrementOffice = setInterval(() => {
            setCountOffice(prev => {
                if (prev < office) return prev + Math.ceil(office / totalSteps);
                clearInterval(incrementOffice);
                return office;
            });
        }, step);

        const incrementSuggested = setInterval(() => {
            setCountSuggested(prev => {
                if (prev < suggested) return prev + Math.ceil(suggested / totalSteps);
                clearInterval(incrementSuggested);
                return suggested;
            });
        }, step);

        return () => {
            clearInterval(incrementYears);
            clearInterval(incrementPatients);
            clearInterval(incrementPercentage);
            clearInterval(incrementHours);
            clearInterval(incrementOffice);
            clearInterval(incrementSuggested);
        };
    }, [years, patients, percentage]);

    return (
        <section className="flex flex-col md:h-fit md:flex-row absolute -top-9 w-[calc(100vw-10%)] rounded-xl gap-16 justify-around py-16 dark:bg-dark-secondary-bg bg-light-secondary-bg shadow-lg font-Montserrat">
            <div className="text-center">
                <h2 className="text-4xl font-bold dark:text-white text-dark">{countYears}{countYears === years ? "+" : ""}</h2>
                <p className="dark:text-white text-dark !text-opacity-55">{t("view_home.statistics.year_of_exp")}</p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold dark:text-white text-dark">{countPatients}{countPatients === patients ? "+" : ""}</h2>
                <p className="dark:text-white text-dark !text-opacity-55">{t("view_home.statistics.customer_satisfied")}</p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold dark:text-white text-dark">{countPercentage}%</h2>
                <p className="dark:text-white text-dark !text-opacity-55">{t("view_home.statistics.positive_review")}</p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold dark:text-white text-dark">{countHours}</h2>
                <p className="dark:text-white text-dark !text-opacity-55">{t("view_home.statistics.hours_of_training")}</p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold dark:text-white text-dark">{countOffice}</h2>
                <p className="dark:text-white text-dark !text-opacity-55">{t("view_home.statistics.office")}</p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold dark:text-white text-dark">{countSuggested}%</h2>
                <p className="dark:text-white text-dark !text-opacity-55">{t("view_home.statistics.suggested")}</p>
            </div>
        </section>
    );
}

export default Statistics;