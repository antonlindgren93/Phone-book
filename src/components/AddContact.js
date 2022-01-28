import React, { useState } from "react";
import "./AddContact.css";
import ContactList from "./ContactList";

const AddContact = ({ addContactToList }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const saveContact = (e) => {
    e.preventDefault();
    addContactToList({ firstName, lastName, phoneNumber });
  };
  return (
    <div className="container">
      <div className="input-container">
        <p>First Name:</p>
        <input
          type="text"
          name="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <p>Last Name:</p>
        <input
          type="text"
          name="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <p>Phone:</p>
        <input
          name="phonenumber"
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <button onClick={saveContact}>Add New Contact</button>
      </div>

    </div>
  );
};

export default AddContact;
