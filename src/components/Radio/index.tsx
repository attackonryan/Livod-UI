import React, { ReactNode, useEffect, useRef } from "react";
import Group from "./Group";
import "./style/index.less";

interface RawRadioProps {
  children?: ReactNode;
  disabled?: boolean;
  defaultChecked?: boolean;
  name?: string;
  value?: string | number;
  checked?: boolean;
  style?: React.CSSProperties;
}

const RawRadio: React.FC<RawRadioProps> = ({
  children,
  disabled = false,
  defaultChecked = false,
  name = null,
  value = "",
  checked,
  style = {},
}) => {
  const RadioRef = useRef<HTMLInputElement>();
  useEffect(() => {
    if (defaultChecked) {
      RadioRef.current.checked = true;
    }
  }, []);
  return (
    <label className="livod-radio-wrapper" style={style}>
      <input
        name={name}
        type="radio"
        className="livod-checkbox-input"
        disabled={disabled}
        ref={RadioRef}
        value={value}
        checked={checked}
        onChange={() => {}}
      />
      <span>{children}</span>
    </label>
  );
};

const Radio: typeof RawRadio & {
  Group: typeof Group;
} = RawRadio as any;

Radio.Group = Group;

export default Radio;
