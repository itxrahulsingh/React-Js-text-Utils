import React from "react";

function Alerts(props) {
  return (
    props.alert && (
      <div className="container">
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show position-fixed end-0`}
          role="alert"
        >
          <b>{props.alert.msg}</b>
        </div>
      </div>
    )
  );
}

export default Alerts;
