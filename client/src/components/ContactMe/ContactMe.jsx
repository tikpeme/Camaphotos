import React from "react";
import "./ContactMe.scss";
import { Form } from "react-router-dom";

function ContactMe() {
  return (
    <section className="contactMe-section">
      Contact
      <div className="contactMe-wrapper">
        <div className="contact-grid">
          <h3 className="contact-title">
            Need some beautiful portraits? Let's work together!
          </h3>
          <div className="form-wrapper">
            <Form>
              <div className="text-field-wrapper">
                <div className="text-wrap">
                  <label className="field-label">Name</label>
                  <input
                    type="text"
                    className="text-field"
                    placeholder="Enter your full name"
                  ></input>
                </div>
                <div className="text-field-spacer"></div>
                <div className="text-wrap">
                  <label className="field-label">Email</label>
                  <input
                    type="email"
                    className="text-field"
                    placeholder="Enter your Email"
                  ></input>{" "}
                </div>
              </div>
              <label className="field-label">Message</label>
              <textarea
                placeholder="How Can I Help You?"
                maxLength="5000"
                id="Message"
                name="Message"
                data-name="Message"
                className="text-field min-height w-input"
              ></textarea>
              <input
                type="submit"
                value="Let's Work Together"
                data-wait="Sending Your Message"
                className="white-outlined-btn w-button"
              ></input>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
