import classes from "./ContactForm.module.css";
import { useState, useRef } from "react";
import Modal from "../UI/Modal";
import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const isEmpty = (value) => value.trim() === "";
const isNotTenChars = (value) => value.trim().length !== 10;
const isNotEmail = (value) => !value.includes("@");

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formInputIsValid, setFormInputIsValid] = useState({
    name: true,
    phone: true,
    email: true,
    inquiry: true,
  });
  const [didSubmit, setDidSubmit] = useState(false);
  const { width, height } = useWindowSize();

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const inquiryInputRef = useRef();

  const submitHandler = async (event) => {
    setIsSubmitting(true);
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredInquiry = inquiryInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredPhoneIsValid =
      !isEmpty(enteredPhone) && !isNotTenChars(enteredPhone);
    const enteredEmailIsValid =
      !isEmpty(enteredEmail) && !isNotEmail(enteredEmail);
    const enteredInquiryIsValid = !isEmpty(enteredInquiry);

    setFormInputIsValid({
      name: enteredEmailIsValid,
      phone: enteredPhoneIsValid,
      email: enteredEmailIsValid,
      inquiry: enteredInquiryIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredPhoneIsValid &&
      enteredInquiryIsValid;

    if (!formIsValid) {
      return;
    }

    const submissionDate = new Date();

    await fetch(
      "https://hannawhitney-portfolio-default-rtdb.firebaseio.com/inquiries.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: enteredName,
          phone: enteredPhone,
          email: enteredEmail,
          inquiry: enteredInquiry,
          date: submissionDate.toISOString(),
        }),
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);

    nameInputRef.current.value = "";
    phoneInputRef.current.value = "";
    emailInputRef.current.value = "";
    inquiryInputRef.current.value = "";
  };

  const closeModalHandler = () => {
    setDidSubmit(false);
  };

  return (
    <>
      {didSubmit && (
        <>
          <Modal onClose={closeModalHandler}>
            <h1>Thanks for reaching out!</h1>
            <p>I'll get back to you shortly.</p>
            <button onClick={closeModalHandler}>Close</button>
          </Modal>
          <Confetti width={width} height={height} />
        </>
      )}

      <form className={classes.form} onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            formInputIsValid.name ? "" : classes.invalid
          }`}
        >
          <label htmlFor="name">Name</label>
          <input id="name" type="text" ref={nameInputRef} />
          {!formInputIsValid.name && <p>Please enter your name</p>}
        </div>

        <div
          className={`${classes.control} ${
            formInputIsValid.phone ? "" : classes.invalid
          }`}
        >
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            ref={phoneInputRef}
            pattern="[0-9\-\+\(\)\s]+"
          />
          {!formInputIsValid.phone && <p>Please enter your phone number</p>}
        </div>

        <div
          className={`${classes.control} ${
            formInputIsValid.email ? "" : classes.invalid
          }`}
        >
          <label htmlFor="email">Email</label>
          <input id="email" type="email" ref={emailInputRef} />
          {!formInputIsValid.email && <p>Please enter your email address</p>}
        </div>

        <div
          className={`${classes.control} ${
            formInputIsValid.inquiry ? "" : classes.invalid
          }`}
        >
          <label htmlFor="inquiry">Inquiry</label>
          <textarea id="inquiry" rows="5" ref={inquiryInputRef} />
          {!formInputIsValid.inquiry && <p>Please enter your inquiry</p>}
        </div>

        <div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
