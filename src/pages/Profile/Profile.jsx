import React from 'react'
import { Outlet } from 'react-router'
import { Page } from '../../components/Page/Page'
import { FormattedMessage } from 'react-intl'
import { VerticalNavAndTabs } from '../../components/VerticalNavAndTabs/VerticalNavAndTabs'

export const Profile = () => {
    return (
        <Page style={"custom_container flex gap-10 mr-10 grid grid-cols-12"}>
            <VerticalNavAndTabs
                className={"col-span-3 h-full"}
                defaultValue="edit-profile"
                id="course-details-tabs"
                route={`/profile`}
                withPermissions
                tabs={[
                    { label: <FormattedMessage id='editProfile' />, target: "edit-profile" },
                    { label: <FormattedMessage id='reservationsHistory' />, target: "reservations-history" },
                ]}
            />
            <div className='col-span-9'>
                <Outlet />
            </div>
        </Page>
    )
}
