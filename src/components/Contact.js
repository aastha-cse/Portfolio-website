
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";

export const Contact = () => {
  const form = useRef();

  const formInitialDetails = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({});
  const [errors, setErrors] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [category]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [category]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formDetails.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formDetails.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formDetails.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (
      formDetails.phone.trim() &&
      !/^\d{10}$/.test(formDetails.phone.trim())
    ) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formDetails.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setButtonText("Sending...");
    setStatus({});

    emailjs
      .sendForm(
        "service_100rrnz",
        "template_y8ddcsa",
        form.current,
        "jukw0PfOSy_KQEfea"
      )
      .then(
        () => {
          setButtonText("Send Message");
          setFormDetails(formInitialDetails);
          setErrors({});
          setStatus({
            success: true,
            message: "Your message has been sent successfully!",
          });
        },
        () => {
          setButtonText("Send Message");
          setStatus({
            success: false,
            message: "Something went wrong. Please try again later.",
          });
        }
      );
  };

  return (
    <section className="contact-section" id="connect">
      <Container>
        <div className="contact-heading">
          <span className="section-eyebrow">LET'S CONNECT</span>

          <h2>
            Get in <span>Touch</span>
          </h2>

          <p>
            Have a question, an opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>
        </div>

        <div className="contact-wrapper">
          <Row className="align-items-center">
            <Col lg={5} md={5}>
              <div className="contact-visual">
                <img src={contactImg} alt="Get in touch illustration" />

                <div className="contact-visual-text">
                  <span>HAVE AN IDEA?</span>
                  <h3>Let's make something great together.</h3>
                  <p>
                    I'm always open to interesting conversations,
                    collaborations, and new opportunities.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={7} md={7}>
              <div className="contact-form-container">
                <div className="contact-form-heading">
                  <h3>Send me a message</h3>
                  <p>I'll get back to you as soon as possible.</p>
                </div>

                <form onSubmit={sendEmail} ref={form} noValidate>
                  <Row>
                    <Col md={6}>
                      <div className="contact-form-group">
                        <label htmlFor="contact-name">Your Name</label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formDetails.name}
                          placeholder="Enter your name"
                          onChange={(e) =>
                            onFormUpdate("name", e.target.value)
                          }
                        />
                        {errors.name && (
                          <p className="contact-error">{errors.name}</p>
                        )}
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="contact-form-group">
                        <label htmlFor="contact-email">Email Address</label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formDetails.email}
                          placeholder="you@example.com"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                        {errors.email && (
                          <p className="contact-error">{errors.email}</p>
                        )}
                      </div>
                    </Col>

                    <Col md={12}>
                      <div className="contact-form-group">
                        <label htmlFor="contact-phone">
                          Phone Number <span>(Optional)</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formDetails.phone}
                          placeholder="Enter your phone number"
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                        {errors.phone && (
                          <p className="contact-error">{errors.phone}</p>
                        )}
                      </div>
                    </Col>

                    <Col md={12}>
                      <div className="contact-form-group">
                        <label htmlFor="contact-message">Your Message</label>
                        <textarea
                          id="contact-message"
                          rows="5"
                          name="message"
                          value={formDetails.message}
                          placeholder="Tell me a little about what you have in mind..."
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        />
                        {errors.message && (
                          <p className="contact-error">{errors.message}</p>
                        )}
                      </div>
                    </Col>

                    <Col md={12}>
                      <div className="contact-submit-area">
                        <button
                          type="submit"
                          disabled={buttonText === "Sending..."}
                        >
                          {buttonText}
                          <span>↗</span>
                        </button>

                        {status.message && (
                          <p
                            className={`contact-status ${
                              status.success ? "success" : "failure"
                            }`}
                            role="status"
                          >
                            {status.message}
                          </p>
                        )}
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
