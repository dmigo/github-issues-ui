import React, { useState, useEffect } from "react";
import "./index.css";
import api from "./api";
import Filter from "../Filter";
import Issues from "../Issues";
import Error from "../Error";
import Loading from "./Loading";

const App = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    api.issues
      .getBugs()
      .then(issues => {
        setError(null);
        setIssues(issues);
        setLoading(false);
      })
      .catch(error => {
        setIssues([]);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="dc-page">
      <div className="dc-container">
        <Filter />
         {error ? <Error error={error} /> : null}
        <Issues issues={issues} />
        {loading ? <Loading /> : null}
      </div>
    </div>
  );
};

export default App;
