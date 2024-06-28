import React from 'react'
import { Page } from '../../components/Page/Page'
import { FormattedMessage } from 'react-intl'

export const TermsAndCondtions = () => {
    let items = [
        {
            name: <FormattedMessage id='termItem1' />,
            info: <FormattedMessage id='termItemInfo1' />
        },
        {
            name: <FormattedMessage id='termItem2' />,
            info: <FormattedMessage id='termItemInfo2' />
        },
        {
            name: <FormattedMessage id='termItem3' />,
            info: <FormattedMessage id='termItemInfo3' />
        },
        {
            name: <FormattedMessage id='termItem4' />,
            info: <FormattedMessage id='termItemInfo4' />
        },
        {
            name: <FormattedMessage id='termItem5' />,
            info: <FormattedMessage id='termItemInfo5' />
        },
        {
            name: <FormattedMessage id='termItem6' />,
            info: <FormattedMessage id='termItemInfo6' />
        },
        {
            name: <FormattedMessage id='termItem7' />,
            info: <FormattedMessage id='termItemInfo7' />
        },
        {
            name: <FormattedMessage id='termItem8' />,
            info: <FormattedMessage id='termItemInfo8' />
        },
        {
            name: <FormattedMessage id='termItem9' />,
            info: <FormattedMessage id='termItemInfo9' />
        },
    ]
    return (
        <Page style={"py-8 custom_container"}>
            <h3 className='text-2xl m-auto'><FormattedMessage id='termsAndConditions' /></h3>
            <div className='mt-5 px-5'>
                {items.map((item, idx) => {
                    return (
                        <div>
                            <p className='my-2 text-lg text-sky-600 dark:text-white' key={idx}>{idx + 1} - {item.name}</p>
                            <p className='my-2 px-8 text-lg text-sky-800 dark:text-white' key={idx}>{item.info}</p>
                        </div>
                    )
                })}
            </div>
        </Page>
    )
}
