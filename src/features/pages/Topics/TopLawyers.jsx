import React from 'react'
import { useTopLawyersData } from '../../../queries/queries';
import Loading from '../../../components/Loading/Loading';
import { FormattedMessage } from 'react-intl';
import { Slider } from '../../../components/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import { LawyerCard } from '../../../components/LawyerCard/LawyerCard';

export const TopLawyers = () => {
    const { data: lawyers, isLoading } = useTopLawyersData();
    let content;
    if (isLoading) {
        content = <Loading />;
    } else if (!lawyers || !lawyers.length) {
        content = <h2 className="fw-bolder text-center"><FormattedMessage id='noLawyers' /></h2>;
    } else {
        content =
            <div className='w-full sticky top-11 h-[100vh]'>
                <h3 className='text-2xl dark:text-white'><FormattedMessage id='sponser' /></h3>
                <Slider
                    style={"h-[70%]"}
                    slidesPerView={1}
                >
                    {lawyers.map((lawyer) => {
                        return (
                            <SwiperSlide key={lawyer.id}><LawyerCard className={"bg-[#8ECAE1] h-full"} key={lawyer.id} lawyer={lawyer} /></SwiperSlide>
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
