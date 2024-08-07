import React, { useEffect, useState } from 'react'
import { LogoComponent } from '../LogoComponent/LogoComponent';
import { useStore } from '../../zustand/store';
import { CgProfile } from "react-icons/cg";
import styles from './Navbar.module.css';
import { AuthUserDropDown } from '../../features/components/Navbar/AuthUserDropDown/AuthUserDropDown';
import { UnAuthDropDown } from '../../features/components/Navbar/UnAuthDropDown/UnAuthDropDown';
import { NavSettings } from '../../features/components/Navbar/NavSettings/NavSettings';
import { NavLinks } from '../../features/components/Navbar/NavLinks/NavLinks';
export const Navbar = () => {
    const lang = localStorage.getItem("lang") || "ltr";
    const authData = useStore((state) => state.authData);
    const userDropDown = useStore((state) => state.userDropDown);
    const setUserDropDown = useStore((state) => state.setUserDropDown);
    const navbarOpened = useStore((state) => state.navBarOpened);
    const setNavBarOpened = useStore((state) => state.setNavBarOpened);
    const handleUserTabs = () => {
        setUserDropDown(!userDropDown)
    }

    function closeSideBar(e) {
        if (!e.target.closest(".UserIcon")) {
            closeSideBarOnClick();
        }
        if (!e.target.closest(".links") && !e.target.closest(".smNav")) {
            setNavBarOpened(false);
        }
    }

    function closeSideBarOnClick() {
        setUserDropDown(false)
    }

    useEffect(() => {
        document.addEventListener("click", closeSideBar);
    }, []);
    return (
        <div className='w-full z-50 shadow-mdn'>
            <div className='flex items-center justify-between p-5 bg-white dark:bg-gray-800 relative'>
                <LogoComponent bg={"bg-black/80 dark:bg-transparent rounded-full"} />
                <div className={`${styles.links} links bg-white dark:bg-slate-700 md:bg-white md:dark:bg-transparent  ${navbarOpened ? "right-0" : "right-[-100%] md:right-0"} `}>
                    <NavLinks />
                </div>
                <div className="flex items-center gap-3">
                    <div className='relative UserIcon'>
                        <span onClick={handleUserTabs} className='cursor-pointer dark:text-white'><CgProfile size={20} /></span>
                        <div className={`${userDropDown ? "block" : "hidden"} ${styles.userDropDown} bg-white dark:bg-slate-500 dark:border-slate-400 ${lang == 'ltr' ? '-left-24' : ""}`}>
                            {authData ?
                                <AuthUserDropDown />
                                :
                                <UnAuthDropDown />
                            }
                        </div>
                    </div>
                    <NavSettings />
                </div>
            </div>
        </div>
    )
}
