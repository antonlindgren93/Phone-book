import React, { useState } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactToList = (contact) => {
    setContacts(
      [...contacts, contact].sort((a, b) =>
        a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1
      )
    );
  };
  return (
    <>
      <h3>Add a new contact:</h3>
      <AddContact addContactToList={addContactToList} />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
