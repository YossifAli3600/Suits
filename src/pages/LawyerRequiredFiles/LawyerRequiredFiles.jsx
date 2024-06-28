import React from 'react'
import { Page } from '../../components/Page/Page'
import { FormattedMessage } from 'react-intl'

export const LawyerRequiredFiles = () => {
    let Files = [
        {
            name: <FormattedMessage id='reqItem1' />
        },
        {
            name: <FormattedMessage id='reqItem2' />
        },
        {
            name: <FormattedMessage id='reqItem3' />
        },
        {
            name: <FormattedMessage id='reqItem4' />
        },
        {
            name: <FormattedMessage id='reqItem5' />
        },
        {
            name: <FormattedMessage id='reqItem6' />
        },
    ]
    return (
        <Page style={"py-8 custom_container"}>
            <h3 className='text-2xl m-auto'><FormattedMessage id='ReqFiles' /></h3>
            <div className='mt-5 px-5'>
                {Files.map((item, idx) => {
                    return <p className='my-2 text-lg text-sky-600 dark:text-white' key={idx}>{idx + 1} - {item.name}</p>
                })}
            </div>
        </Page>
    )
}
