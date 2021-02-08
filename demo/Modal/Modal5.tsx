import React from "react";
import { Modal, Button } from "../../src";

function info() {
  Modal.info({
    title: "This is a notification message",
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
}

function success() {
  Modal.success({
    content: "some messages...some messages...",
  });
}

function error() {
  Modal.error({
    title: "This is an error message",
    content: "some messages...some messages...",
  });
}

function warning() {
  Modal.warning({
    title: "This is a warning message",
    content: "some messages...some messages...",
  });
}
const App = () => (
  <>
    <Button onClick={info}>Info</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </>
);
export default App;
