import React, { useState } from "react";
import "./ContactMe.scss";
import { Form } from "react-router-dom";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here, such as sending the data to a server

    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section className="contactMe-section">
      Contact
      <div className="contactMe-wrapper">
        <div className="contact-grid">
          <h3 className="contact-title">
            Need some beautiful portraits? Let's work together!
          </h3>
          <div className="form-wrapper">
            <form>
              <div className="text-field-wrapper">
                <div className="text-wrap">
                  <label className="field-label">Name</label>
                  <input
                    type="text"
                    className="text-field"
                    id="name"
                    value={name}
                    placeholder="Enter your full name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  ></input>
                </div>
                <div className="text-field-spacer"></div>
                <div className="text-wrap">
                  <label className="field-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    className="text-field"
                    placeholder="Enter your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>{" "}
                </div>
              </div>
              <label className="field-label">Message</label>
              <textarea
                placeholder="How Can I Help You?"
                maxLength="5000"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                data-name="Message"
                className="text-field min-height w-input"
              ></textarea>
              <input
                type="submit"
                value="Let's Work Together"
                data-wait="Sending Your Message"
                className="white-outlined-btn w-button"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
