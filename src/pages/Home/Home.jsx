import React, { Fragment } from 'react'
import { HeroSlider } from '../../components/HeroSlider/HeroSlider'
import { Testimonials } from '../../features/pages/Home/Testimonials/Testimonials'
import HomeCategories from '../../features/pages/Home/HomeCategories/HomeCategories'
import { WhyUs } from '../../features/pages/Home/WhyUs/WhyUs'
import { LatestTopics } from '../../features/pages/Home/latestTopics/latestTopics'
import { Page } from '../../components/Page/Page'

export const Home = () => {
    return (
        <Page>
            <HeroSlider />
            <HomeCategories />
            <WhyUs />
            <LatestTopics />
            <Testimonials />
        </Page>
    )
}
