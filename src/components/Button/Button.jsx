import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import Loading from "../Loading/Loading";
import React from 'react';

export default function Button({
  variant,
  children,
  as,
  to,
  className,
  onClick,
  type,
  isLoading,
  disabled,
  target
}) {
  if (as == "link") {
    return (
      <LinkComponent variant={variant} to={to} className={className} target={target}>
        {children}
      </LinkComponent>
    );
  } else {
    return (
      <ButtonComponent
        variant={variant}
        className={className}
        onClick={onClick}
        type={type}
        isLoading={isLoading}
        disabled={disabled || isLoading}
      >
        {!isLoading ? children : ""}
      </ButtonComponent>
    );
  }
}

function ButtonComponent({
  variant,
  children,
  className,
  onClick,
  type,
  isLoading,
  disabled
}) {
  return (
    <button
      className={` ${styles.button} ${styles["button__" + (variant || "primary")]
        } ${className || ""} justify-center
    `}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}{" "}
      {isLoading ? (
        <Loading
          className={`loading--small ${variant == "secondary" ? "" : "light"}`} widthFit
        />
      ) : (
        ""
      )}
    </button>
  );
}

function LinkComponent({ variant, children, to, className, onClick, target }) {
  return (
    <Link
      className={` ${styles.button} ${styles["button__" + (variant || "primary")]
        } ${className || ""} no-underline block text-center`}
      to={to}
      onClick={onClick}
      target={target}
    >
      {children}
    </Link>
  );
}