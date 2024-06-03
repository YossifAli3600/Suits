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
                // element: <Register />
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
        ]
    }
])
export default router;