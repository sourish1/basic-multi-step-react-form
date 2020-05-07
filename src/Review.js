import React from "react";

const Review = ({ setForm, formData, navigation }) => {
  const {
    firstName,
    lastName,
    address,
    city,
    state,
    pincode,
    phone,
    email
  } = formData;
  const { go } = navigation;

  return (
    <div>
      <h2>Review your data</h2>
      <h4>
        Name
        <button onClick={() => go("name")}>Edit</button>
      </h4>
      <div>
        {" "}
        First name: {`${firstName}`},
        <br />
        Last Name: {`${lastName}`}
      </div>

      <h4>
        Address
        <button onClick={() => go("address")}>Edit</button>
      </h4>
      <div>
        Address: {`${address}`},
        <br />
        City: {`${city}`},
        <br />
        State: {`${state}`},
        <br />
        Pincode: {`${pincode}`}
      </div>

      <h4>
        Contact
        <button onClick={() => go("contact")}>Edit</button>
      </h4>
      <div>
        Phone: {`${phone}`},
        <br />
        E-mail: {`${email}`}
      </div>
      <div>
        <button onClick={() => go("submit")}>Submit</button>
      </div>
    </div>
  );
};

export default Review;
