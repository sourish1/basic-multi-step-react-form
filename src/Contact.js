import React from "react";
import FormComponent from './FormComponent';

const Contact = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  return (
    <div className="form">
      <h2>Contact Information</h2>
        <FormComponent
            label="Phone"
            name="phone" 
            value={phone}
            onChange={setForm}
        />
        <FormComponent
            label="E-mail"
            name="email"
            value={email}
            onChange={setForm} 
        />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Contact;