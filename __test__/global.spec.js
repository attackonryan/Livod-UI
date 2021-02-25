import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import * as LivodUI from "../src";
import { isElement, act } from "react-dom/test-utils";

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

describe("LivodUI components", () => {
  it("can export components", () => {
    Object.values(LivodUI).forEach((V) => {
      if (V.displayName) {
        expect(isElement(<V></V>)).toBe(true);
      }
    });
  });
});

describe("components can render correct DOM type", () => {
  it("can render a button", () => {
    act(() => {
      ReactDOM.render(<LivodUI.Button>button</LivodUI.Button>, container);
    });
    const button = container.querySelector("button");
    expect(button.tagName).toBe("BUTTON");
  });

  it("can render a text type input", () => {
    act(() => {
      ReactDOM.render(<LivodUI.Input />, container);
    });
    const input = container.querySelector("input");
    expect(input.tagName).toBe("INPUT");
    expect(input.type).toBe("text");
  });

  it("can render a radio type input", () => {
    act(() => {
      ReactDOM.render(<LivodUI.Radio />, container);
    });
    const input = container.querySelector("input");
    expect(input.tagName).toBe("INPUT");
    expect(input.type).toBe("radio");
  });

  it("can render a checkbox type input", () => {
    act(() => {
      ReactDOM.render(<LivodUI.Checkbox />, container);
    });
    const input = container.querySelector("input");
    expect(input.tagName).toBe("INPUT");
    expect(input.type).toBe("checkbox");
  });

  it("can render a textarea", () => {
    act(() => {
      ReactDOM.render(<LivodUI.Input.TextArea />, container);
    });
    const textarea = container.querySelector("textarea");
    expect(textarea.tagName).toBe("TEXTAREA");
  });
});
