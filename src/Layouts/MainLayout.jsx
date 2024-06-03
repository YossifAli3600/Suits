import React, { Fragment } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import { Footer } from '../components/Footer/Footer'

export const MainLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  )
}
