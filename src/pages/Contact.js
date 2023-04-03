import React from "react";
import { Main, Form } from "../utils/styles";
import { contact } from "../Assets";

const Contact = () => {
  const handleSubmit = (e) => {};
  return (
    <Main>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <header>
          <h3>Contact Me</h3>
          <img src={contact} alt="contact" />
        </header>
        <div className="input">
          <label htmlFor="name"> Email </label>
          <input type="email" name="email" placeholder="(e.g). abc@gmail.com" />
        </div>
        <div className="input">
          <label htmlFor="message"> message </label>
          <textarea name="message" placeholder="Type your message" />
        </div>
        <div className="submit">
          <input type="submit" value="Send message" />
        </div>
      </Form>
    </Main>
  );
};

export default Contact;
