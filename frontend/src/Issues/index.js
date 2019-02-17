import React, { Component } from "react";

import Issue from "./Issue";
import Loading from "./Loading";
import Error from "../Error";

const Empty = () => (
  <div className="dc-card">There is no issues to show.</div>
);

const LoadMore = ({ load }) => (
  <div className="dc-card" onClick={load}>
    <div className="dc-btn">Load more</div>
  </div>
);

class Issues extends Component {
  render() {
    return <div> Issues </div>;
  }
}

export default Issues;
