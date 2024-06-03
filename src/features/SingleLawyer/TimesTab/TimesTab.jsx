import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import styles from './TimesTab.module.css'
export const TimesTab = () => {
  return (
    <Swiper
      modules={[Navigation]}
      className={`h-auto ${styles.TimesTab}`}
      navigation
      slidesPerView={3}
      spaceBetween={20}
      breakpoints={{
        1200: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 1,
        }
      }}
    >
      <SwiperSlide className={`h-auto`}>
        <div className='rounded-lg overflow-hidden h-full'>
          <div className='h-[50px] bg-[#DDB762] flex items-center justify-center' >اليوم</div>
          <div className='bg-[#F9F9F9] h-full dark:bg-slate-400 text-black dark:text-white flex items-center justify-center'>
            <span className='mb-[50px]'><FormattedMessage id='noTimes' /></span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={`h-auto`}>
        <div className=' rounded-lg  overflow-hidden h-full'>
          <div className='h-[50px] bg-[#DDB762] flex items-center justify-center' >غدا</div>
          <div className='bg-[#F9F9F9] dark:bg-slate-400 text-black dark:text-white flex flex-col items-center justify-center gap-3'>
            <span className='bg-[#DDB762] mt-5 p-1 rounded-lg'>10:00 ص</span>
            <span>10:30 ص</span>
            <span>11:00 ص</span>
            <span>11:30 ص</span>
            <span className='mb-3'>12:00 ص</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={`h-auto`}>
        <div className=' rounded-lg  overflow-hidden h-full'>
          <div className='h-[50px] bg-[#DDB762] flex items-center justify-center' >الاثنين 02/03</div>
          <div className='bg-[#F9F9F9] dark:bg-slate-400 text-black dark:text-white flex flex-col items-center justify-center gap-3'>
            <span className='bg-[#DDB762] mt-5 p-1 rounded-lg'>10:00 ص</span>
            <span>10:30 ص</span>
            <span>11:00 ص</span>
            <span>11:30 ص</span>
            <span className='mb-3'>12:00 ص</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={`h-auto`}>
        <div className=' rounded-lg  overflow-hidden h-full'>
          <div className='h-[50px] bg-[#DDB762] flex items-center justify-center' >الثلاثاء 02/04</div>
          <div className='bg-[#F9F9F9] dark:bg-slate-400 text-black dark:text-white flex flex-col items-center justify-center gap-3'>
            <span className='bg-[#DDB762] mt-5 p-1 rounded-lg'>10:00 ص</span>
            <span>10:30 ص</span>
            <span>11:00 ص</span>
            <span>11:30 ص</span>
            <span className='mb-3'>12:00 ص</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
