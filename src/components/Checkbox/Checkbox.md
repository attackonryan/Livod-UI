导入

```js static
import { Checkbox } from "livod-ui";
```

基本用法

```jsx
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
<Checkbox onChange={onChange}>Checkbox</Checkbox>;
```

不可用

```jsx
<Checkbox defaultChecked={false} disabled />
      <br />
      <Checkbox defaultChecked disabled />
```

受控的 Checkbox

```jsx
import React, { useState } from "react";
import { Button } from "../../index.ts";
const [state, setState] = useState({
  checked: true,
  disabled: false,
});
const toggleChecked = () => {
  console.log();
  setState(Object.assign({ ...state }, { checked: !state.checked }));
};

const toggleDisable = () => {
  setState(Object.assign({ ...state }, { disabled: !state.disabled }));
};

const onChange = (e) => {
  console.log("checked = ", e.target.checked);
  setState(Object.assign({ ...state }, { checked: e.target.checked }));
};

const label = `${state.checked ? "Checked" : "Unchecked"}-${
  state.disabled ? "Disabled" : "Enabled"
}`;
<>
  <p style={{ marginBottom: "20px" }}>
    <Checkbox
      checked={state.checked}
      disabled={state.disabled}
      onChange={onChange}
    >
      {label}
    </Checkbox>
  </p>
  <p>
    <Button type="primary" onClick={toggleChecked} size="small">
      {!state.checked ? "Check" : "Uncheck"}
    </Button>
    <Button
      style={{ margin: "0 10px" }}
      type="primary"
      onClick={toggleDisable}
      size="small"
    >
      {!state.disabled ? "Disable" : "Enable"}
    </Button>
  </p>
</>;
```

Checkbox 组

```jsx
const plainOptions = ["Apple", "Pear", "Orange"];
const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
];
const optionsWithDisabled = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange", disabled: true },
];
function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}
<>
  <Checkbox.Group
    options={plainOptions}
    defaultValue={["Apple"]}
    onChange={onChange}
  />
  <br />
  <br />
  <Checkbox.Group
    options={options}
    defaultValue={["Pear"]}
    onChange={onChange}
  />
  <br />
  <br />
  <Checkbox.Group
    options={optionsWithDisabled}
    defaultValue={["Apple"]}
    onChange={onChange}
  />
</>;
```

全选

```jsx
import React, { useState } from "react";
import { Button } from "../../index.ts";
const plainOptions = ["Apple", "Pear", "Orange"];
const [checkAll, setCheckAll] = useState(false);

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

<>
  <Checkbox.Group
    options={plainOptions}
    defaultValue={["Apple"]}
    onChange={onChange}
    checkAll={checkAll}
  />
  <br />
  <Button onClick={() => setCheckAll(!checkAll)}>toggle All</Button>
</>;
```
