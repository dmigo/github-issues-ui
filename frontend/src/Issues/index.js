import React, { Component } from "react";

import Issue from "./Issue";

const Empty = () => <div className="dc-card">There is no issues to show.</div>;

const LoadMore = ({ load }) => (
  <div className="dc-card" onClick={load}>
    <div className="dc-btn">Load more</div>
  </div>
);

const Issues = ({ issues }) => {
  return (
    <div>
      {issues && issues.length ? (
        issues.map(issue => <Issue issue={issue} />)
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Issues;
