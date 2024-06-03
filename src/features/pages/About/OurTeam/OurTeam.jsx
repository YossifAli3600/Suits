import React from 'react'
import { Slider } from '../../../../components/Slider/Slider'
import { SwiperSlide } from 'swiper/react'
import { SectionLayout } from '../../../../components/SectionLayout/SectionLayout'
import { PersonCard } from '../PersonCard/PersonCard'
import { FormattedMessage } from 'react-intl'

export const OurTeam = () => {
  const DummyTeam = [
    {
      name: "Yossif Ali",
      image: "https://lh3.googleusercontent.com/d/1gxZ70zsDs8sIf1mO9LYW3SGgPXUgRBkG",
      rate: 5,
      content: "Thorough, Professional, Interesting & Always Up To Date.. Simply Brilliant"
    },
    {
      name: "Hossam Mohamed",
      image: "https://lh3.googleusercontent.com/d/18dN6zBuJcdPqJmlqw8pz9uQSLfIeNEi3",
      rate: 5,
      content: "Thorough, Professional, Interesting & Always Up To Date.. Simply Brilliant"
    },
    {
      name: "Saad Mohamed",
      image: "https://lh3.googleusercontent.com/d/1g_Bkl0jk6Z6NjY9VJloCvP5vxCjnJzTI",
      rate: 5,
      content: "Thorough, Professional, Interesting & Always Up To Date.. Simply Brilliant"
    },

    {
      name: "Selvana Nassef",
      image: "https://lh3.googleusercontent.com/d/1Z0GwHhJspDyt7I6GHTCcxyM0LVSNLE63",
      rate: 5,
      content: "Excellent work, highly recommended."
    },
    {
      name: "Sohila Sobhy",
      image: "https://lh3.googleusercontent.com/d/1qg1UGfKiLqEUfdcu83lkwVAYenB4BAOO",
      rate: 2.5,
      content: "Great service! Very knowledgeable and helpful."
    },
    {
      name: "Sawsan Rashad",
      image: "https://lh3.googleusercontent.com/d/1GF7uom8Ru0GTB5KwfHtPFMkG59i3eLBX",
      rate: 2.5,
      content: "Great service! Very knowledgeable and helpful."
    },
  ];

  return (
    <SectionLayout title={<FormattedMessage id='OurTeam' />}>
      <Slider
        slidesPerView={3}
        breakpoints={{
          1200: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          456: {
            slidesPerView: 1,
          },
        }}>
        {DummyTeam?.map((person, index) => {
          return (
            <SwiperSlide className={`h-auto px-5`} key={`Person__Num__${`${index}`}`}>
              {({ isActive }) => (
                <PersonCard person={person} isActive={isActive} />
              )}
            </SwiperSlide>
          )
        })}
      </Slider>
    </SectionLayout >
  )
}
