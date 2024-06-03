import React from 'react'
import security from '../../../../assets/images/security.png'
import security2 from '../../../../assets/images/security2.png'
import guarantee from '../../../../assets/images/100.png'
import guarantee2 from '../../../../assets/images/satisfaction.png'
import time from '../../../../assets/images/time.png'
import time2 from '../../../../assets/images/time2.png'
import styles from './WhyUs.module.css'
import { SectionLayout } from '../../../../components/SectionLayout/SectionLayout'
import { FormattedMessage } from 'react-intl'
export const WhyUs = () => {
    return (
        <SectionLayout title={<FormattedMessage id='whyUs' />}>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch`}>

                <div className={`flex flex-col items-center justify-center border h-full p-5 ${styles.WhyUs} relative overflow-hidden rounded-lg dark:bg-gray-800 dark:text-white`}>
                    <div className='h-[90px] mb-5 z-20'><img src={security2} className='w-full h-full object-cover' alt="securityLogo" /></div>
                    <div className='text-center py-8 z-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos tenetur doloremque nulla. Quaerat labore.</div>
                    <div className='w-[200px] mb-8 z-20'><img src={security} className='w-full' alt="securityLogo" /></div>
                </div>

                <div className={`flex flex-col items-center justify-center border h-full p-5 ${styles.WhyUs} relative overflow-hidden rounded-lg dark:bg-gray-800 dark:text-white`}>
                    <div className='h-[90px] w-[100px] mb-5 z-20'><img src={guarantee} className='w-full h-full object-cover' alt="guaranteeLogo" /></div>
                    <div className='text-center py-8 z-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos tenetur doloremque nulla. Quaerat labore.</div>
                    <div className='w-[200px] mb-8 z-20'><img src={guarantee2} className='w-full' alt="guaranteeLogo" /></div>
                </div>

                <div className={`flex flex-col items-center justify-center border h-full p-5 ${styles.WhyUs} relative overflow-hidden rounded-lg dark:bg-gray-800 dark:text-white`}>
                    <div className='h-[90px] w-[100px] mb-5 z-20'><img src={time} className='w-full h-full object-cover' alt="timeLogo" /></div>
                    <div className='text-center py-8 z-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos tenetur doloremque nulla. Quaerat labore.</div>
                    <div className='w-[200px] mb-8 z-20'><img src={time2} className='w-full' alt="timeLogo" /></div>
                </div>

            </div>
        </SectionLayout>
    )
}
