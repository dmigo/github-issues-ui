import React from "react";
import "./Issue.css";

const Avatar = ({ imageUrl, profileUrl }) => {
  // TODO move style to class
  return (
    <a href={profileUrl}>
      <span
        style={{
          backgroundColor: "#fafafa",
          borderRadius: "3px",
          height: "40px",
          width: "40px",
          boxSizing: "border-box",
          display: "block",
          overflow: "hidden",
          position: "relative"
        }}
      >
        <img src={imageUrl} alt="avatar" style={{ width: "100%", height: "auto" }} />
      </span>
    </a>
  );
};

const Tag = ({ name, url, color }) => (
  <span
    href={url}
    style={{
      //TODO move style to class, invert the font color
      backgroundColor: `#${color}`,
      color: "#000000",
      borderRadius: "2px",
      boxShadow: "inset 0 -1px 0 rgba(27,31,35,.12)",
      fontSize: "12px",
      fontWeight: "600",
      height: "20px",
      lineHeight: "15px",
      padding: ".15em 4px",
      margin: "2px"
    }}
  >
    {name}{" "}
  </span>
);

const Tags = ({ tags }) => (
  <div>
    {tags && tags.length
      ? tags.map(tag => <Tag name={tag.name} url={tag.url} color={tag.color} />)
      : null}
  </div>
);

const Issue = ({ issue }) => (
  <div className="dc-card issue-card">
    <div className="inline-edit dc-row">
      <div className="dc-column dc-column--medium-1">
        <Avatar
          imageUrl={issue.user.avatar_url}
          profileUrl={issue.user.html_url}
        />
      </div>
      <div className="dc-column dc-column--medium-8">
        <p>
          {issue.title}{" "}
          <a href={issue.html_url} className="dc-link">
            open
          </a>
        </p>
      </div>
      <div className="dc-column dc-column--medium-2">
        <Tags tags={issue.labels} />
      </div>
    </div>
  </div>
);

const Field = ({ label, value }) => (
  <div className="inline-edit dc-row">
    <div className="dc-column dc-column--medium-1">{label}</div>
    <div className="dc-column dc-column--medium-10">{value}</div>
  </div>
);
// {
//   "url": "https://api.github.com/repos/apache/incubator-superset/issues/6857",
//   "repository_url": "https://api.github.com/repos/apache/incubator-superset",
//   "labels_url": "https://api.github.com/repos/apache/incubator-superset/issues/6857/labels{/name}",
//   "comments_url": "https://api.github.com/repos/apache/incubator-superset/issues/6857/comments",
//   "events_url": "https://api.github.com/repos/apache/incubator-superset/issues/6857/events",
//   "html_url": "https://github.com/apache/incubator-superset/pull/6857",
//   "id": 409143678,
//   "node_id": "MDExOlB1bGxSZXF1ZXN0MjUyMTk0Njk3",
//   "number": 6857,
//   "title": "auto-set 'Is Temporal' to true where column_name == '__time'",
//   "user": {
//     "login": "mistercrunch",
//     "id": 487433,
//     "node_id": "MDQ6VXNlcjQ4NzQzMw==",
//     "avatar_url": "https://avatars1.githubusercontent.com/u/487433?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/mistercrunch",
//     "html_url": "https://github.com/mistercrunch",
//     "followers_url": "https://api.github.com/users/mistercrunch/followers",
//     "following_url": "https://api.github.com/users/mistercrunch/following{/other_user}",
//     "gists_url": "https://api.github.com/users/mistercrunch/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/mistercrunch/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/mistercrunch/subscriptions",
//     "organizations_url": "https://api.github.com/users/mistercrunch/orgs",
//     "repos_url": "https://api.github.com/users/mistercrunch/repos",
//     "events_url": "https://api.github.com/users/mistercrunch/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/mistercrunch/received_events",
//     "type": "User",
//     "site_admin": false
//   },
// "labels": [
//   {
//     "id": 238899549,
//     "node_id": "MDU6TGFiZWwyMzg4OTk1NDk=",
//     "url": "https://api.github.com/repos/apache/incubator-superset/labels/%23bug",
//     "name": "#bug",
//     "color": "c0392b",
//     "default": false
//   },
//   {
//     "id": 405242327,
//     "node_id": "MDU6TGFiZWw0MDUyNDIzMjc=",
//     "url": "https://api.github.com/repos/apache/incubator-superset/labels/.js",
//     "name": ".js",
//     "color": "ecf0f1",
//     "default": false
//   },
//   {
//     "id": 1062372621,
//     "node_id": "MDU6TGFiZWwxMDYyMzcyNjIx",
//     "url": "https://api.github.com/repos/apache/incubator-superset/labels/minor-review",
//     "name": "minor-review",
//     "color": "ed82dd",
//     "default": false
//   },
//   {
//     "id": 1204089042,
//     "node_id": "MDU6TGFiZWwxMjA0MDg5MDQy",
//     "url": "https://api.github.com/repos/apache/incubator-superset/labels/v0.31",
//     "name": "v0.31",
//     "color": "B1D558",
//     "default": false
//   }
// ],
// "state": "open",
// "locked": false,
// "assignee": null,
// "assignees": [

// ],
// "milestone": null,
// "comments": 1,
// "created_at": "2019-02-16T08:02:58Z",
// "updated_at": "2019-02-16T08:28:10Z",
// "closed_at": null,
// "author_association": "CONTRIBUTOR",
// "pull_request": {
//   "url": "https://api.github.com/repos/apache/incubator-superset/pulls/6898",
//   "html_url": "https://github.com/apache/incubator-superset/pull/6898",
//   "diff_url": "https://github.com/apache/incubator-superset/pull/6898.diff",
//   "patch_url": "https://github.com/apache/incubator-superset/pull/6898.patch"
// },
// "body": "Nvd3 attaches tooltips to the body of the dom, not the chart the tooltip is meant fo. On hover, it sets their opacity to 1. In order to address both their stickiness when chart reloads (PR #6805) and thier disappearance on scroll in dashboards (PR #6852), we introduce a shouldRemove parameter to `hideTooltips` and only remove them befor chart reloads. For the scroll events triggered on dashboards, we only hide the tooltips by setting their opacity to 0. When they get hovered over again, nvd3 sets their opacity to 1 which causes them to reappear."

export default Issue;
