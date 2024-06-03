import React from 'react'
import Features from '../../features/pages/About/Features/Features'
import { OurTeam } from '../../features/pages/About/OurTeam/OurTeam'
import { Page } from '../../components/Page/Page'

export const AboutPage = () => {
    return (
        <Page>
            <Features />
            <OurTeam />
        </Page>
    )
}
