import React from 'react'
import './Issue.css'

const Issue = ({
}) => (
  <div className="dc-card issue-card">
    <Field label="Issue" value="Issue" />
  </div>
)

const Field = ({ label, value }) => (
  <div className="inline-edit dc-row">
    <div className="dc-column dc-column--medium-2">{label}</div>
    <div className="dc-column dc-column--medium-9">{value}</div>
  </div>
)

export default Issue
