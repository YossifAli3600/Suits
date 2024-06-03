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
        <div className={`${styles.hero}`}>
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
                            <div className={`${styles.slide} ${isActive ? styles.aciveSlide : ""}`}>
                                <div className='bg-[#00000087] absolute w-full h-full'></div>
                                <h3 className={`${styles.header} ${isActive ? styles.activeHeader : ""} text-orange-500 text-center text-4xl`}>{slide.header}</h3>
                                <p className={`${styles.text} ${isActive ? styles.aciveSliderText : ""} text-white text-center w-[50%] leading-8 text-2xl`}>{slide.content}</p>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}