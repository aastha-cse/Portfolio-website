import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const form = useRef();

  const formInitialDetails = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [errors, setErrors] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [category]: value,
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
      newErrors.email = "Invalid email address";
    }

    // Phone is optional, but validate it if entered.
    if (
      formDetails.phone.trim() &&
      !/^\d{10}$/.test(formDetails.phone.trim())
    ) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formDetails.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setButtonText("Sending...");
    setStatus({});

    emailjs
      .sendForm(
        "service_100rrnz",
        "template_y8ddcsa",
        form.current,
        "jukw0PfOSy_KQEfea",
      )
      .then(
        () => {
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          setErrors({});
          setStatus({
            success: true,
            message: "Message sent successfully!",
          });
        },
        () => {
          setButtonText("Send");
          setStatus({
            success: false,
            message: "Unable to send message. Please try again later.",
          });
        },
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>

                  <form onSubmit={sendEmail} ref={form}>
                    <Row>
                      {/* Left column */}
                      <Col md={6} className="contact-left">
                        <div className="form-group">
                          <input
                            type="text"
                            value={formDetails.name}
                            name="name"
                            placeholder="Name"
                            onChange={(e) =>
                              onFormUpdate("name", e.target.value)
                            }
                          />
                          {errors.name && (
                            <p className="text-danger">{errors.name}</p>
                          )}
                        </div>

                        <div className="form-group">
                          <input
                            type="email"
                            value={formDetails.email}
                            name="email"
                            placeholder="Email Address"
                            onChange={(e) =>
                              onFormUpdate("email", e.target.value)
                            }
                          />
                          {errors.email && (
                            <p className="text-danger">{errors.email}</p>
                          )}
                        </div>

                        <div className="form-group">
                          <input
                            type="tel"
                            value={formDetails.phone}
                            name="phone"
                            placeholder="Phone No. (Optional)"
                            onChange={(e) =>
                              onFormUpdate("phone", e.target.value)
                            }
                          />
                          {errors.phone && (
                            <p className="text-danger">{errors.phone}</p>
                          )}
                        </div>
                      </Col>

                      {/* Right column */}
                      <Col md={6} className="contact-right">
                        <textarea
                          rows="8"
                          value={formDetails.message}
                          name="message"
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        />

                        {errors.message && (
                          <p className="text-danger">{errors.message}</p>
                        )}

                        <button
                          id="but"
                          type="submit"
                          disabled={buttonText === "Sending..."}
                        >
                          <span>{buttonText}</span>
                        </button>

                        <p
                          className={
                            status.success === false
                              ? "text-danger"
                              : "text-white"
                          }
                        >
                          {status.message}
                        </p>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
