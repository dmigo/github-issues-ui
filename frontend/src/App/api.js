import axios from "axios";

const baseUri = "https://api.github.com/repos";

const toUIObjects = item => item;

const issues = {
  getBugs: (owner = "apache", project = "incubator-superset") =>
    axios
      .get(`${baseUri}/${owner}/${project}/issues`, {
        params: {
          labels: "#bug"
        }
      })
      .then(response => response.data.map(toUIObjects))
      .catch(error => {
        throw error.response.data
          ? error.response.data
          : { type: "Error", message: error.message };
      })
};

export default {
  issues
};
