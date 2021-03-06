import React, { useEffect, useMemo } from "react";
import Checkbox from "./index";
interface GroupProps {
  options: string[] | Option[];
  defaultValue?: string[];
  onChange: (checkedValue: string[]) => void;
  checkAll?: boolean;
}

export type Option = {
  label: string;
  value: string;
  disabled?: boolean;
  checked?: boolean;
};

const Group: React.FC<GroupProps> = ({
  options,
  defaultValue = [],
  onChange = () => {},
  checkAll = false,
}) => {
  let checkedSet = new Set(defaultValue);
  const handleChange = (e) => {
    const value = e.target.value;
    if (checkedSet.has(value)) {
      checkedSet.delete(value);
    } else {
      checkedSet.add(value);
    }
    onChange(Array.from(checkedSet));
  };
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

  const refObj = {} as any;

  useEffect(() => {
    defaultValue.forEach((v) => {
      refObj[v].check();
    });
  });

  useEffect(() => {
    if (checkAll) {
      Object.keys(refObj).forEach((key) => refObj[key].check(true));
      checkedSet = new Set(Object.keys(refObj));
    } else {
      Object.keys(refObj).forEach((key) => refObj[key].check(false));
      checkedSet.clear();
    }
    onChange(Array.from(checkedSet));
  }, [checkAll]);

  return (
    <>
      {optionList.map((v) => {
        return (
          <Checkbox
            key={v.label}
            value={v.value}
            onChange={handleChange}
            ref={(e) => (refObj[v.label] = e)}
            disabled={v.disabled}
          >
            {v.label}
          </Checkbox>
        );
      })}
    </>
  );
};

export default Group;
