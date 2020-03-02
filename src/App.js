import React, { Component } from "react";
import CountDown from "./CountDown";
import StopWatch from "./StopWatch";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App-title">Timers</div>
        <div className="Timers">
          <StopWatch />
          <CountDown />
        </div>
      </div>
    );
  }
}
