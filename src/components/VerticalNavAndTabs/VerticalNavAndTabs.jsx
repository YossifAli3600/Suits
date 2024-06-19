import styles from "./VerticalNavAndTabs.module.css";
import { NavLink } from "react-router-dom";
import React from 'react'

export default function VerticalNavAndTabs({ tabs, route, id }) {
  function activeNavLink({ isActive }) {
    if (isActive) {
      return `${styles.course__sidebar__item} ${styles["course__sidebar__item--active"]}`;
    }
    return `${styles.course__sidebar__item}`;
  }

  return (
    <div className={styles.course__sidebar}>
      <ul className="list-none m-0 p-0">
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
