import React from 'react'
import { Slider } from '../../../components/Slider/Slider';
import { FormattedMessage } from 'react-intl';
import { SwiperSlide } from 'swiper/react';
import { LawyerCard } from '../../../components/LawyerCard/LawyerCard';
import Loading from '../../../components/Loading/Loading';
import { useAdsLawyersData } from '../../../queries/queries';

export const AdsLawyers = () => {
    const { data: lawyers, isLoading } = useAdsLawyersData();
    let content;
    if (isLoading) {
        content = <Loading />;
    } else if (!lawyers || !lawyers.length) {
        content = <h2 className="fw-bolder text-center"><FormattedMessage id='noLawyers' /></h2>;
    } else {
        content =
            <div className='w-full  md:sticky md:top-11  md:h-[100vh]'>
                <h3 className='text-2xl dark:text-white'><FormattedMessage id='sponser' /></h3>
                <Slider
                    style={"md:h-[70%]"}
                    slidesPerView={1}
                >
                    {lawyers.map((lawyer) => {
                        return (
                            <SwiperSlide key={lawyer.id}><LawyerCard className={"bg-sky-100 hover:bg-sky-200	h-full p-8 md:px-5"} key={lawyer.id} lawyer={lawyer.lawyer_data} /></SwiperSlide>
                        );
                    })}
                </Slider>
            </div>
    }
    return (
        <>
            {content}
        </>
    )
}
