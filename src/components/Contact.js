import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const form = useRef();
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [errors, setErrors] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formDetails.firstName.trim()) {
      isValid = false;
      errors.firstName = 'First name is required';
    }

    if (!formDetails.lastName.trim()) {
      isValid = false;
      errors.lastName = 'Last name is required';
    }

    if (!formDetails.email.trim()) {
      isValid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formDetails.email)) {
      isValid = false;
      errors.email = 'Invalid email address';
    }

    if (!formDetails.phone.trim()) {
      isValid = false;
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formDetails.phone)) {
      isValid = false;
      errors.phone = 'Invalid phone number';
    }

    if (!formDetails.message.trim()) {
      isValid = false;
      errors.message = 'Message is required';
    }

    setErrors(errors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setButtonText('Sending...');
    emailjs
      .sendForm('service_2lnndde', 'template_bezpygt', form.current, 'GT2eVQhPlIG_V__Y3')
      .then(
        (result) => {
          setButtonText('Send');
          setFormDetails(formInitialDetails);
          setStatus({ success: true, message: 'Message sent successfully' });
          setErrors({});
        },
        (error) => {
          setButtonText('Send');
          setStatus({ success: false, message: 'Something went wrong, please try again later' });
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => <img className={isVisible ? 'animate_animated animate_zoomIn' : ''} src={contactImg} alt="Contact Us" />}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate_animated animate_fadeIn' : ''}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={sendEmail} ref={form}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          name="first_name"
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                        {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          name="last_name"
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                        {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          name="email"
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          name="contact"
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                        {errors.phone && <p className="text-danger">{errors.phone}</p>}
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          name="message_"
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        ></textarea>
                        {errors.message && <p className="text-danger">{errors.message}</p>}
                        <button id="but" type="submit">
                          <span>{buttonText}</span>
                        </button>
                        <br></br>
                        <br></br>
                        <p className={status.success === false ? 'text-danger' : 'text-white'}>{status.message}</p>
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