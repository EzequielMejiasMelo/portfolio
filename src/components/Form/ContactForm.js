import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h3>Contact Me!</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="inputMessage" className="form-label">
            Message
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMessage"
            onChange={(event) => setMessage(event.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
