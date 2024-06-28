import styles from "./VerticalNavAndTabs.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react'

export const VerticalNavAndTabs = ({ className, tabs, route, id, defaultValue, exceptionDefault }) => {
  const navigate = useNavigate()
  const location = useLocation();
  const currentUrl = location.pathname;
  const lang = localStorage.getItem("lang") || "ltr";

  function activeNavLink({ isActive }) {
    useEffect(() => {
      if (exceptionDefault) {
        if (currentUrl == exceptionDefault) {
          defaultValue ? navigate(`${route}/${defaultValue}`) : "";
        }
      } else {
        defaultValue ? navigate(`${route}/${defaultValue}`) : "";
      }


    }, [defaultValue, navigate, route]);
    if (isActive) {
      return `${styles.sidebar__item} ${styles["sidebar__item--active"]}`;
    }
    return `${styles.sidebar__item}`;
  }

  return (
    <div className={`${className ? className : ""}`}>
      <ul className={`list-none pl-10 ${lang == "ltr" ? "lg:border-r-2 " : "lg:border-l-2 "}h-[100%] py`}>
        {tabs.map((tab) => (
          <NavLink key={`vertical-nav-${id}-${tab.target}`}
            className={activeNavLink} to={`${route}/${tab.target}`}>
            <div>{tab.label}</div>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
