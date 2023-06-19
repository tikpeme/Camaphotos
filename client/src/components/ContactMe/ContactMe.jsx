import React, { useState, useRef } from "react";
import "./ContactMe.scss";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setformSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Perform form submission logic here,
    emailjs
      .sendForm(
        "service_tos395e",
        "template_q9ey4fd",
        form.current,
        "Gc-HCSO_NvM3CK3de"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Reset the form fields

    setName("");
    setEmail("");
    setMessage("");
    setformSubmitted(true);
  };
  return (
    <section className="contactMe-section" id="contact-me">
      <div className="contactMe-wrapper">
        <div className="contact-grid">
          <h3 className="contact-title">
            Need some beautiful portraits? Let's work together!
          </h3>
          <div className="form-wrapper">
            {!formSubmitted ? (
              <form ref={form} onSubmit={sendEmail}>
                <div className="text-field-wrapper">
                  <div className="text-wrap">
                    <label className="field-label">Name</label>
                    <input
                      type="text"
                      className="text-field"
                      id="name"
                      value={name}
                      name="user_name"
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
                      name="user_email"
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
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  data-name="message"
                  className="text-field min-height w-input"
                ></textarea>
                <input
                  type="submit"
                  value="Let's Work Together"
                  data-wait="Sending Your Message"
                  className="white-outlined-btn w-button"
                ></input>
              </form>
            ) : (
              <div className="success-message">
                Thank you! Your inquiry was recieved!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
