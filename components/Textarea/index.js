import React from "react";
import s from "./Textarea.module.css";
import { classNames } from "../../lib/helpers";

const Textarea = (props) => {
  const { className, children, onChange, label, ...rest } = props;

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
      <textarea
        className={rootClassName}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </label>
  );
};

export default Textarea;
