import React from "react";
import cn from "classnames";
import s from "./Input.module.css";
import { classNames } from "../../lib/helpers";

const Input = (props) => {
  const {
    className,
    children,
    onChange,
    label,
    type = "text",
    ...rest
  } = props;

  const rootClassName = classNames(
    s.root,
    { [s.disabled]: rest?.disabled },
    className
  );

  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
    return null;
  };

  return (
    <label>
      {label && <span className={s.label}>{label}</span>}
      <input
        className={rootClassName}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        type={type}
        {...rest}
      />
    </label>
  );
};

export default Input;
