import React from 'react';
import styles from './LawyerCard.module.css';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export const LawyerCard = ({ lawyer, className }) => {
    return (
        <Link to={`/lawyer/${lawyer.id}`} className={`${styles.LawyerCard} ${className} px-5 flex justify-center items-center rounded-2xl shadow-lg border dark:bg-slate-400`}>
            <div>
                <div className={`${styles.innerCircle} rounded-full flex items-center justify-center p-3 m-auto mb-6`}>
                    <img src={lawyer.image} className='w-full h-full rounded-full' alt={lawyer.name} />
                </div>
                <h3 className=' dark:text-white font-bold leading-5	pb-8 opacity-75 duration-500 text-center'>{lawyer.name}</h3>
                <h3 className=' dark:text-white font-bold leading-5	pb-5 opacity-75 duration-500'><FormattedMessage id={"category"} />  : {lawyer.department_name}</h3>
                <h3 className=' dark:text-white text-start font-bold leading-5	pb-5 opacity-75 duration-500'><FormattedMessage id={"description"} /> : {lawyer.shortDescription}</h3>
            </div>
        </Link>
    );
};
