import React from "react";

const FormComponent = ({ label, ...otherProps }) => (
  <div>
    <label>{label}</label>
    <input type="text" {...otherProps} />
  </div>
);

export default FormComponent;