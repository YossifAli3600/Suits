import React from 'react'
import { useTopLawyersData } from '../../../queries/queries';
import Loading from '../../../components/Loading/Loading';
import { FormattedMessage } from 'react-intl';
import { Slider } from '../../../components/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import { LawyerCard } from '../../../components/LawyerCard/LawyerCard';
import { Link } from 'react-router-dom';

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
                <h3 className='text-2xl dark:text-white'><FormattedMessage id='topLawyers' /></h3>
                <Slider
                    style={"h-[70%]"}
                    slidesPerView={1}
                >
                    {lawyers.map((lawyer) => {
                        return (
                            <SwiperSlide key={lawyer.id}><LawyerCard className={"bg-sky-200 hover:bg-sky-300 h-full"} key={lawyer.id} lawyer={lawyer} /></SwiperSlide>
                        );
                    })}
                </Slider>
                <Link to={"/lawyers"} className='bg-sky-400 py-1 px-2 rounded-xl w-full flex items-center justify-center'><FormattedMessage id='allLawyers' /></Link>
            </div>
    }
    return (
        <>
            {content}
        </>
    )
}
