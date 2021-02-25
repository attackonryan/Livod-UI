import React, {
  ChangeEvent,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import Group from "./Group";
import "./style/index.less";

interface CheckboxProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  /** 默认是否选中 */
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: string | number;
  children?: ReactNode;
}

const RawCheckbox = React.forwardRef<any, CheckboxProps>(
  (
    { children, onChange, defaultChecked, checked, disabled, value = "" },
    ref
  ) => {
    const CheckboxRef = useRef<HTMLInputElement>();
    useImperativeHandle(
      ref,
      () => ({
        check(tOF) {
          CheckboxRef.current.checked = tOF;
        },
      }),
      [CheckboxRef]
    );
    useEffect(() => {
      if (defaultChecked) {
        CheckboxRef.current.checked = true;
      }
    }, []);
    return (
      <label className="livod-checkbox-wrapper">
        <input
          type="checkbox"
          checked={checked}
          className="livod-checkbox-input"
          disabled={disabled}
          value={value}
          onChange={onChange}
          ref={CheckboxRef}
        />
        <span>{children}</span>
      </label>
    );
  }
);

const Checkbox: typeof RawCheckbox & {
  Group: typeof Group;
} = RawCheckbox as any;

Checkbox.Group = Group;
Checkbox.displayName = "Checkbox";

export default Checkbox;
