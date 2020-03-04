import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  onClick() {}
  render() {
    const title = "My APP";
    const list = [1, 2, 3];
    return (
      <div className="App">
        <h1>
          {list.map(ayushi => {
            return <div onClick={this.onClick}>{ayushi}</div>;
          })}
        </h1>
      </div>
    );
  }
}

export default App;
