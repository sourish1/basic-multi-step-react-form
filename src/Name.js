import React from "react";

import FormComponent from "./FormComponent";

const Name = ({ setForm, formData, navigation }) => {
  const { firstName, lastName } = formData;

  const { next } = navigation;

  return (
    <div className="form">
    <h2>Name</h2>
      <FormComponent
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
      />
      <FormComponent
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
      />
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Name;