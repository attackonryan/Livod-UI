import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Button } from "../../src/index";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
});

describe("button component test suite", () => {
  it("can render a button", () => {
    act(() => {
      ReactDOM.render(<Button>the first button</Button>, container);
    });
    const button = container.querySelector("button");
    expect(button.textContent).toBe("the first button");
  });

  it("can trigger onclick event", () => {
    act(() => {
      const onClick = () => {
        button.textContent = "clicked";
      };
      ReactDOM.render(<Button onClick={onClick}>button</Button>, container);
    });
    const button = container.querySelector("button");
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(button.textContent).toBe("clicked");
  });

  it("can receive size props", () => {
    act(() => {
      ReactDOM.render(<Button size="small">small button</Button>, container);
    });
    const button = container.querySelector("button");
    expect(button.textContent).toBe("small button");
    expect(button.className).toContain("small");
  });

  it("can receive disabled props", () => {
    act(() => {
      ReactDOM.render(<Button disabled>small button</Button>, container);
    });
    const button = container.querySelector("button");
    expect(button.disabled).toBe(true);
  });
});
