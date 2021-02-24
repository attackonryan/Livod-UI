导入

```js static
import { Radio } from "livod-ui";
```

基本

```jsx
<Radio>Radio</Radio>
```

不可用

```jsx
import React, { useState } from "react";
import { Button } from "../../index.ts";
const [disabled, setDisabled] = useState(true);
const toggleDisabled = () => {
  setDisabled(!disabled);
};
<>
  <Radio name="test1" defaultChecked={false} disabled={disabled}>
    Disabled
  </Radio>
  <Radio name="test1" defaultChecked disabled={disabled}>
    Disabled
  </Radio>
  <br />
  <Button type="primary" onClick={toggleDisabled} style={{ marginTop: 16 }}>
    Toggle disabled
  </Button>
</>;
```

单选组合

```jsx
const [value, setValue] = React.useState(1);

const onChange = (e) => {
  console.log("radio checked", e.target.value);
  setValue(e.target.value);
};

<Radio.Group onChange={onChange} value={value}>
  <Radio value={1}>A</Radio>
  <Radio value={2}>B</Radio>
  <Radio value={3}>C</Radio>
  <Radio value={4}>D</Radio>
</Radio.Group>;
```

Radio.Group 垂直

```jsx
import React, { useState } from "react";
import { Radio, Input } from "../../index.ts";

const [value, setValue] = useState(1);

const onChange = (e) => {
  console.log("radio checked", e.target.value);
  setValue(e.target.value);
};

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};
<Radio.Group onChange={onChange} value={value}>
  <Radio style={radioStyle} value={1}>
    Option A
  </Radio>
  <Radio style={radioStyle} value={2}>
    Option B
  </Radio>
  <Radio style={radioStyle} value={3}>
    Option C
  </Radio>
  <Radio style={radioStyle} value={4}>
    More...
    {value == 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
  </Radio>
</Radio.Group>;
```

Radio.Group 配置方式

```jsx
import React, { useState } from "react";
const plainOptions = ["Apple", "Pear", "Orange"];

const optionsWithDisabled = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange", disabled: true },
];
const [value1, setValue1] = useState("Apple");
const [value2, setValue2] = useState("Apple");

const onChange1 = (e) => {
  console.log("radio1 checked", e.target.value);
  setValue1(e.target.value);
};

const onChange2 = (e) => {
  console.log("radio2 checked", e.target.value);
  setValue2(e.target.value);
};
<>
  <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
  <br />
  <Radio.Group
    options={optionsWithDisabled}
    onChange={onChange2}
    value={value2}
  />
  <br />
</>;
```
