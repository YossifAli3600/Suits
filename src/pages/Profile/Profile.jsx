import React from 'react'
import { Outlet } from 'react-router'
import { Page } from '../../components/Page/Page'
import { FormattedMessage } from 'react-intl'
import { VerticalNavAndTabs } from '../../components/VerticalNavAndTabs/VerticalNavAndTabs'
import { useStore } from '../../zustand/store'

export const Profile = () => {
    const authData = useStore((state) => state.authData);
    let userTabs = [
        { label: <FormattedMessage id='editProfile' />, target: "edit-profile" },
        { label: <FormattedMessage id='reservationsHistory' />, target: "reservations-history" },
        { label: <FormattedMessage id='messages' />, target: "messages" },
    ]
    let lawyerTabs = [
        { label: <FormattedMessage id='editProfile' />, target: "edit-profile" },
        { label: <FormattedMessage id='AdsHistory' />, target: "Ads-history" },
        { label: <FormattedMessage id='messages' />, target: "lawyer-messages" },
    ]

    return (
        <Page style={"custom_container flex gap-10 md:mr-10 grid lg:grid-cols-12"}>
            <VerticalNavAndTabs
                className={"col-span-12 md:col-span-3 h-full"}
                defaultValue="edit-profile"
                exceptionDefault="/profile"
                id="profile-tabs"
                route={`/profile`}
                tabs={authData.type == "User" ? userTabs : lawyerTabs}
            />
            <div className='col-span-12 md:col-span-8'>
                <Outlet />
            </div>
        </Page>
    )
}
