import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './HeroSlider.module.css';
import 'swiper/css';
import heroSlider1 from '../../assets/images/heroSlider1.jpg';
import heroSlider2 from '../../assets/images/heroSlider2.jpg';
import heroSlider3 from '../../assets/images/heroSlider3.jpg';
import { FormattedMessage } from 'react-intl';

export const HeroSlider = () => {

    const slides = [
        {
            id: 1,
            header: <FormattedMessage id='heroSlider1Header' />,
            content: <FormattedMessage id='heroSlider1Text' />,
            image: heroSlider2
        },
        {
            id: 2,
            header: <FormattedMessage id='heroSlider2Header' />,
            content: <FormattedMessage id='heroSlider2Text' />,
            image: heroSlider1
        },
        {
            id: 3,
            header: <FormattedMessage id='heroSlider3Header' />,
            content: <FormattedMessage id='heroSlider3Text' />,
            image: heroSlider3
        }
    ];


    return (
        <>
            <div className={`${styles.hero} hidden md:block`}>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                >
                    {slides.map((slide) => (
                        <SwiperSlide
                            key={slide.id}
                            className='relative w-full h-[500px] bg-no-repeat bg-cover bg-center'
                            style={{
                                backgroundImage: `url(${slide.image})`
                            }}
                        >
                            {({ isActive }) => (
                                <div className={`${isActive ? styles.aciveSlide : ""} ${styles.slide}`}>
                                    <div className='bg-[#00000087] absolute w-full h-full'></div>
                                    <h3 className={`header text-orange-500 text-center text-xl xl:text-3xl`}>{slide.header}</h3>
                                    <p className={`subHeader text-white text-center w-[50%] leading-8 text-md xl:text-xl`}>{slide.content}</p>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div >
            <div className='h-[500px] bg-no-repeat bg-cover bg-center relative flex items-center justify-center flex-col md:hidden' style={{
                backgroundImage: `url(${slides[0].image})`
            }}>
                <div className='bg-[#00000087] absolute w-full h-full z-0'></div>
                <h3 className={`text-orange-500 text-center text-xl z-20`}>{slides[0].header}</h3>
                <p className={`text-white text-center w-[80%] leading-8 text-sm z-20`}>{slides[0].content}</p>
            </div>
        </>
    )
}