import React from "react";
import Button from "./component/Button";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">Button</Button>
        <Button>Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">
          Button
        </Button>
        <Button color="gray">Button</Button>
        <Button size="small" color="gray">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          Button
        </Button>
        <Button color="pink">Button</Button>
        <Button size="small" color="pink">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullwidth={true}>
          Button
        </Button>
        <Button size="large" color="gray" fullwidth={true}>
          Button
        </Button>
        <Button
          size="large"
          color="pink"
          fullwidth={true}
          onClick={() => {
            console.log("클릭");
          }}
        >
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
