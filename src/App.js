import React, { Component } from "react";
import Countdown from "./CountDown";
import Stopwatch from "./StopWatch";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Timers</div>
        <div className="Timers">
          <Stopwatch />
          <Countdown />
        </div>
      </div>
    );
  }
}
