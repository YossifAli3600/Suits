import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import { NavLink } from 'react-router-dom'

export const NavLinks = () => {
    return (
        <Fragment>
            <NavLink to={"/"} className='dark:text-white'><FormattedMessage id='homePage' /></NavLink>
            <NavLink to={"/topics"} className='dark:text-white'><FormattedMessage id='topics' /></NavLink>
            <NavLink to={"/about"} className='dark:text-white'><FormattedMessage id='about' /></NavLink>
            <NavLink to={"/news"} className='dark:text-white'><FormattedMessage id='news' /></NavLink>
            <NavLink to={"/contact-us"} className='dark:text-white'><FormattedMessage id='contact' /></NavLink>
        </Fragment>
    )
}
