import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && ( // it means - if props.alert is not null (this is used because code would throw error if the alert was null)
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}! </strong>
        {props.alert.msg}
      </div>
    )
  );
}

export default Alert;
