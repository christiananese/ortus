import React from "react";
import { classNames } from "../../lib/helpers";
import s from "./Button.module.css";

function Button({
  className,
  variant = "flat",
  children,
  active,
  loading,
  disabled,
  style,
  type = "button",
  Component = "button",
  ...rest
}) {
  const rootClassName = classNames(
    s.root,
    {
      [s.ghost]: variant === "ghost",
      [s.loading]: loading,
      [s.disabled]: disabled,
    },
    className
  );
  return (
    <Component
      aria-pressed={active}
      disabled={disabled}
      className={rootClassName}
      style={{
        ...style,
      }}
      type={type}
      {...rest}
    >
      {!loading && children}
      {loading && <i className="pl-2 m-0 flex">Loading</i>}
    </Component>
  );
}

export default Button;
