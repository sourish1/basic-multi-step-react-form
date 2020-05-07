import React from "react";
import FormComponent from './FormComponent';

const Address = ({ setForm, formData, navigation }) => {
  const { address, city, state, pincode } = formData;

  const { previous, next } = navigation;

  return (
    <div className="form">
      <h2>Address</h2>
        <FormComponent
            label="Address"
            name="address"
            value={address}
            onChange={setForm}
        />
        <FormComponent
            label="City"
            name="city"
            value={city}
            onChange={setForm}
        />
        <FormComponent
            label="State"
            name="state"
            value={state}
            onChange={setForm}
        />
        <FormComponent
            label="Pincode"
            name="pincode"
            value={pincode}
            onChange={setForm}
        />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Address;