import React, { Component } from "react";
import "./index.css";

class Filter extends Component {
  render() {
    const { parameters } = this.props;

    const handleChange = parameter => event => {};

    return (
      <div className="dc-card filter-block">
        <div>
          <label className="dc-label">Repository</label>
          <input
            className="dc-input dc-input--in-input-group"
            type="text"
            value={''}
            placeholder="apache/incubator-superset"
            onChange={handleChange("repository")}
          />
        </div>
      </div>
    );
  }
}

export default Filter;
