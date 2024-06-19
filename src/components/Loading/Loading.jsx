import "./Loading.css";
import { PropTypes } from "prop-types";
import React from 'react';

export default function Loading({ className, sm }) {
  return (
    <div className="flex justify-center w-full">
      <div className={`lds-ring ${sm ? "sm-ring" : ""}` + (className || "")}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div >
  );
}

Loading.propTypes = {
  className: PropTypes.string,
};
