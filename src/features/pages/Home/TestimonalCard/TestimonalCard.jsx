import styles from './TestimonalCard.module.css'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { RateStars } from '../../../../components/RateStars/RateStars';

export const TestimonalCard = ({ Testimonial, isActive }) => {
    return (
        <div className='h-full'>
            <div className={`border-2 h-full dark:bg-slate-40 px-10 py-5 m-auto rounded-md overflow-hidden dark:bg-gray-800 dark:text-white ${isActive ? `${styles.customShadow} border-blue-400` : ""}`}>
                <div className="m-auto w-fit">
                    <div>
                        <img src={Testimonial.image} alt={Testimonial.name} className='w-36 h-36 object-cover rounded-full m-auto' />
                    </div>
                    <div className="flex items-center justify-between my-5">
                        <h3 className="font-bold text-xl">{Testimonial.name}</h3>
                        <div className="rate"><RateStars rate={Testimonial.rate} /></div>
                    </div>
                    <div className="text-gray-700 dark:text-white dark:opacity-75 content duration-500 text-sm">
                        <span><FaQuoteLeft /></span>
                        <p className="my-3 text-xl">{Testimonial.content}</p>
                        <span className="flex justify-end"><FaQuoteRight /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
