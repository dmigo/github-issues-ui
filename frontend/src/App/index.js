import React, { Component } from "react";
import "./index.css";
import Filter from "../Filter";
import Issues from "../Issues";

class App extends Component {
  render() {
    return (
      <div className="dc-page">
        <div className="dc-container">
          <Filter />
          <Issues />
        </div>
      </div>
    );
  }
}

export default App;
