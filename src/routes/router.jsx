import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout";
import { Home } from "../pages/Home/Home";
import { AboutPage } from "../pages/About/About";
import Categories from "../pages/Categories/Categories";
import { SingleCategory } from "../pages/SingleCategory/SingleCategory";
import { SingleLawyer } from "../pages/SingleLawyer/SingleLawyer";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";
import { Topics } from "../pages/Topics/Topics";
import { SingleTopic } from "../pages/SingleTopic/SingleTopic";
import Contact from "../pages/Contact/Contact";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { LawyerRegister } from "../pages/LawyerRegister/LawyerRegister";
import { Booking } from "../features/pages/Booking/Booking";
import React from 'react';
import { Profile } from "../pages/Profile/Profile";
import { EditProfile } from "../features/pages/Profile/EditProfile/EditProfile";
import { ReservationsHistory } from "../features/pages/Profile/ReservationsHistory/ReservationsHistory";
import { ProtectedRouteOrView } from "../components/ProtectedRouteOrView/ProtectedRouteOrView";
import { AdsBooking } from "../features/pages/AdsBooking/AdsBooking";
import { AdsHistory } from "../features/pages/Profile/AdsHistory/AdsHistory";
import { Lawyers } from "../pages/Lawyers/Lawyers";
import { LawyerRequiredFiles } from "../pages/LawyerRequiredFiles/LawyerRequiredFiles";
import { TermsAndCondtions } from "../pages/TermsAndCondtions/TermsAndCondtions";
import { Messages } from "../pages/Messages/Messages";
import { LawyerMessages } from "../pages/LawyerMessages/LawyerMessages";

const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/register-as-lawyer",
                element: <LawyerRegister />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/categories/",
                element: <Categories />
            },
            {
                path: "/category/:categoryId",
                element: <SingleCategory />
            },
            {
                path: "/lawyers",
                element: <Lawyers />
            },
            {
                path: "/lawyer-required-files",
                element: <LawyerRequiredFiles />
            },
            {
                path: "/terms-and-condtions",
                element: <TermsAndCondtions />
            },
            {
                path: "/lawyer/:lawyerId",
                element: <SingleLawyer />
            },
            {
                path: "/topics",
                element: <Topics />
            },
            {
                path: "/topic/:topicId",
                element: <SingleTopic />
            },
            {
                path: "/contact-us",
                element: <Contact />
            },
            {
                path: "/profile",
                element: <ProtectedRouteOrView auth>
                    <Profile />
                </ProtectedRouteOrView>,
                children: [
                    {
                        path: "edit-profile",
                        element: <EditProfile />
                    },
                    {
                        path: "reservations-history",
                        element: <ReservationsHistory />
                    },
                    {
                        path: "Ads-history",
                        element: <AdsHistory />
                    },
                    {
                        path: "messages",
                        element: <Messages />
                    },
                    {
                        path: "lawyer-messages",
                        element: <LawyerMessages />
                    },
                ],
            },
            {
                path: "/booking",
                element: <Booking />
            },
            {
                path: "/ads_booking",
                element: <AdsBooking />
            },
        ]
    }
])
export default router;