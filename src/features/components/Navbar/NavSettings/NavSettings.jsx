import React, { Fragment, useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";
import { useStore } from '../../../../zustand/store';

export const NavSettings = () => {
    const navbarOpened = useStore((state) => state.navBarOpened);
    const setNavbarOpened = useStore((state) => state.setNavBarOpened);
    const lang = localStorage.getItem("lang") || "ltr";
    const [theme, settheme] = useState(localStorage.getItem("theme") ?? "light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleMode = () => {
        settheme(theme === "dark" ? "light" : "dark");
        localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    };

    const handleLang = () => {
        if (lang == "ltr") {
            localStorage.setItem("lang", "rtl");
        } else {
            localStorage.setItem("lang", "ltr");
        }
        window.location.reload();
    }


    return (
        <Fragment>
            <span className='cursor-pointer dark:text-white' onClick={handleMode}>{theme == "dark" ? <MdOutlineLightMode size={20} /> : <MdOutlineDarkMode size={20} />}</span>
            <span className='cursor-pointer dark:text-white' onClick={handleLang} ><IoLanguageSharp size={20} /></span>
            <span className='cursor-pointer dark:text-white md:hidden smNav' onClick={() => setNavbarOpened(!navbarOpened)} ><FaBars size={20} /></span>
        </Fragment>
    )
}
