import { SwiperSlide } from 'swiper/react'
import { SectionLayout } from '../../../../components/SectionLayout/SectionLayout';
import { FormattedMessage } from 'react-intl';
import { Slider } from '../../../../components/Slider/Slider';
import { TestimonalCard } from '../TestimonalCard/TestimonalCard';

export const Testimonials = () => {
    const DummyTestimonials = [
        {
            name: "John Doe",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            rate: 5,
            content: "Great service! Very knowledgeable and helpful."
        },
        {
            name: "Jane Smith",
            image: "https://t4.ftcdn.net/jpg/04/99/61/55/360_F_499615577_AFqaO7pozqXB9VQnSsxxgLJE1sgGrCgP.jpg",
            rate: 4.5,
            content: "Absolutely amazing! Best experience ever."
        },
        {
            name: "David Johnson",
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712620800&semt=sph",
            rate: 5,
            content: "Excellent work, highly recommended."
        },
        {
            name: "Sarah Brown",
            image: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
            rate: 3.5,
            content: "Impressive service. Will definitely use again."
        },
    ];
    return (
        <SectionLayout title={<FormattedMessage id='testimonials' />}>
            <Slider
                slidesPerView={3}
                breakpoints={{
                    1200: {
                        slidesPerView: 3,
                    },
                    700: {
                        slidesPerView: 2,
                    },
                    200: {
                        slidesPerView: 1,
                    },
                }}>
                {DummyTestimonials?.map((Testimonial, index) => {
                    return (
                        <SwiperSlide className={`h-auto px-5`} key={`Testimonal__Num__${`${index}`}`}>
                            {({ isActive }) => (
                                <TestimonalCard Testimonial={Testimonial} isActive={isActive} />
                            )}
                        </SwiperSlide>
                    )
                })}
            </Slider>
        </SectionLayout>
    )
}
