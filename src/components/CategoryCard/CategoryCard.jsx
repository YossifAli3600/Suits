import React from 'react';
import styles from './CategoryCard.module.css';
import { Link } from 'react-router-dom';

export const CategoryCard = ({ category }) => {
    return (
        <Link to={`/category/${category.id}`} className={`${styles.CategoryCard}  flex justify-center items-center text-center rounded-2xl shadow-lg border dark:bg-gray-800 dark:text-white px-4`}>
            <div>
                <div className={`${styles.innerCircle} rounded-full flex items-center justify-center p-3 m-auto`}>
                    <img src={category.imageUrl} className='w-full h-full rounded-full' alt={`${category.name}_image`} />
                </div>
                <h3 className='dark:text-white font-bold leading-5	py-5 duration-500'>{category.name}</h3>
                <span className='text-[#6F6863] dark:text-white opacity-75  font-thin duration-500'>{category.description}</span>
            </div>
        </Link>
    );
};  
