import React from 'react'
import { Page } from '../../components/Page/Page'
import { BsCalendar2Date } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { IoEye } from "react-icons/io5";

export const SingleTopic = () => {
    return (
        <Page>
            <div className='custom_container mt-16 grid grid-cols-12 gap-5'>
                <div className='col-span-12'>
                    <h3 className='text-4xl font-extrabold'>The Science Behind Skin Care Products Has Come</h3>
                    <div className='flex items-center gap-3 px-1 opacity-85 mt-3'>
                        <div className='flex items-center gap-2'><span className='mb-1'><BsCalendar2Date /></span> <span>Oct 18, 2023</span></div>
                    </div>
                    <div className='rounded-xl overflow-hidden w-full mt-5 h-[500px]'>
                        <img src="https://v1.tailwindcss.com/img/card-top.jpg" className='w-full object-cover' alt="Topic Image" />
                    </div>
                    
                    <p className='my-11 text-lg font-thin'>On August 15th, an alarming email popped up in the inbox of Diana Pearl, a New York-based news editor. Someone in Moscow had logged into her verified Twitter account, it said. Pearl was familiar with the email content’s theme as it resembled previous automated correspondence from Twitter — featuring a minimal white background, black text, and blue links.

                        I’ve created a Team Health Check template based on the exercise I run with my teams. It’s super simple to use and above all, it’s light-hearted and enjoyable.

                        It’s a guided experience, so you don’t need to prepare anything in advance other than setting aside 40 minutes with your team (for teams over six, I’d suggest an hour). By repeating the exercise over consecutive months your team can track the feels and compare results across exercises, Unlike a typical retrospective, the</p>
                </div>
            </div>
        </Page>
    )
}
