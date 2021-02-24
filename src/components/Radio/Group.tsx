import { Option } from "components/Checkbox/Group";
import Radio from "./index";
import React, {
  ChangeEvent,
  ReactElement,
  ReactNode,
  useRef,
  useMemo,
} from "react";

interface GroupProps {
  children?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /** 默认选中的值 */
  value?: string | number;
  /** 配置选项 */
  options?: string[] | Option[];
}

const Group: React.FC<GroupProps> = ({
  children,
  onChange,
  value,
  options,
}) => {
  let children2Render = Array.isArray(children) ? children : [children];
  if (options) {
    /** option优先 */
    const optionList = useMemo<Option[]>(() => {
      const list = [];
      options.forEach((v) => {
        let option = {} as any;
        if (typeof v === "string") {
          option.label = v;
          option.value = v;
          list.push(option);
        } else {
          list.push(v);
        }
      });
      return list;
    }, [options]);
    children2Render = optionList.map((v) => (
      <Radio disabled={v.disabled} value={v.value}>
        {v.label}
      </Radio>
    ));
  }

  const GroupRef = useRef<HTMLDivElement>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    /** 防止事件传递 */
    if (e.target.matches("input[type=text]")) {
      return false;
    }
    onChange(e);
  };
  return (
    <div className="livod-radio-group" onChange={handleChange} ref={GroupRef}>
      {children2Render.map((v) => {
        /** 这里将children强制认为是ReactElement,实际上可能会有问题,比如传入字符串 */
        return React.cloneElement(v as ReactElement, {
          key: (v as any).props.value,
          checked: (v as any).props.value == value,
        });
      })}
    </div>
  );
};

export default Group;
