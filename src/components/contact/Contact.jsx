import React, { useState } from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State to manage form errors
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset errors
    setErrors({
      name: false,
      email: false,
      subject: false,
      message: false,
    });

    // Validate form fields
    const { name, email, subject, message } = formData;
    const newErrors = {
      name: !name,
      email: !email,
      subject: !subject,
      message: !message,
    };

    if (Object.values(newErrors).includes(true)) {
      setErrors(newErrors);
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const errorText = await response.text();
        alert(`Failed to send message: ${errorText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    }
  };

  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' onSubmit={handleSubmit}>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input
                type='text'
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              <input
                type='text'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
            </div>
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? 'error' : ''}
            />
            <textarea
              name='message'
              cols='30'
              rows='10'
              placeholder='Your Message'
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
            ></textarea>
            <button type='submit'>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
