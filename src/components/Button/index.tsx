import React, { MouseEvent, useMemo } from "react";
import "./style/index.less";

interface ButtonProps {
  /** Button组件的类型 */
  type?: "primary" | "danger" | "default";
  /** 点击事件 */
  onClick?: (event: MouseEvent) => void;
  children?: any;
  /** 是否是loading状态 */
  loading?: boolean;
  /** 是否被禁用 */
  disabled?: boolean;
  /** 自定义样式 */
  style?: Object;
  /** size */
  size?: "small" | "normal";
}
/**
 * @param type 传入type prop
 * @param correctedType 返回正确的类名
 */
function correctTypeProp(type: string) {
  let correctedType: string = "";
  const PRIMARY = "primary";
  const DANGER = "danger";
  switch (type) {
    case PRIMARY:
      correctedType = " " + PRIMARY;
      break;
    case DANGER:
      correctedType = " " + DANGER;
      break;
    default:
      correctedType = "";
  }
  return correctedType;
}

function correctSizeProp(size: string) {
  let correctSize = "";
  switch (size) {
    case "small":
      correctSize = " small";
      break;
    default:
      correctSize = "";
  }
  return correctSize;
}

const Button: React.FC<ButtonProps> = React.forwardRef(
  (
    {
      onClick,
      type = "primary",
      disabled = false,
      loading = false,
      children,
      size = "normal",
      ...rest
    },
    ref
  ) => {
    const classname = useMemo(() => {
      let cls = "livod-button";
      cls += correctTypeProp(type);
      cls += correctSizeProp(size);
      return cls;
    }, [type, size]);
    return (
      <button
        onClick={onClick}
        className={classname}
        disabled={disabled === true}
        ref={ref as any}
        {...rest}
      >
        {loading && <span className="livod-loading"></span>}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
