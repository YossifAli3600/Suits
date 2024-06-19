import styles from './PersonCard.module.css'
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import React from 'react';

export const PersonCard = ({ person, isActive }) => {
    return (
        <div className={`${styles.PersonCard} h-full`}>
            <div className={`border-2 h-full px-10 py-5 m-auto rounded-md overflow-hidden dark:text-white  ${isActive ? `${styles.customShadow} border-blue-400 dark:bg-gray-800` : ""}`}>
                <div className="m-auto w-fit relative">
                    <div>
                        <img src={person.image} alt={person.name} className='w-36 h-36 object-cover rounded-full m-auto' />
                    </div>
                    <div className="flex items-center justify-between my-5">
                        <h3 className="font-bold text-xl">{person.name}</h3>
                    </div>
                    <div className="text-gray-700 dark:text-white/75 text-sm">
                        <p className="my-3 text-xl">{person.content}</p>
                        <div className={`flex flex-col gap-3 text-3xl absolute w-full socialIcons`}>
                            <span><FaFacebook /></span>
                            <span><FaLinkedin /></span>
                            <span><FaGithub /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
