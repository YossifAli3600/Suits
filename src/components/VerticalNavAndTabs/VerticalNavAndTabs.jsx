import styles from "./VerticalNavAndTabs.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react'

export const VerticalNavAndTabs = ({ className, tabs, route, id, defaultValue }) => {
  const navigate = useNavigate()
  function activeNavLink({ isActive }) {
    useEffect(() => {
      if (defaultValue) {
        navigate(`${route}/${defaultValue}`);
      }
    }, [defaultValue, navigate, route]);
    if (isActive) {
      return `${styles.sidebar__item} ${styles["sidebar__item--active"]}`;
    }
    return `${styles.sidebar__item}`;
  }

  return (
    <div className={`${className ? className : ""}`}>
      <ul className={`list-none  pl-10 border-l-2 h-[100%] py`}>
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
