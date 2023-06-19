import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import axios from "axios";


const ContactForm = () => {
    const { t, i18n } = useTranslation();
    const [status, setStatus] = useState(t('Submit'));
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(t('Sending'));
        const { name, email, message } = e.target.elements;
        let details = {
        name: name.value,
        email: email.value,
        message: message.value,
        };
        try {
            const response = await axios.post('https://pwiproject.onrender.com/contact', details);
            console.log(response.data);
            setStatus('Email sent successfully');
          } catch (error) {
            console.error(error);
            setStatus('Failed to send email');
          }
        };
    return (
        <div id="section2" className="container mt-3" style={{maxWidth: `600px`, marginBottom: `40px`}}>
        <h2 className="mb-3">{t('Contactus')}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              {t('Name')}
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
            {t('Email')}
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
            {t('Message')}
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-success" type="submit">
            {status}
          </button>
        </form>
      </div>
    );
};

export default ContactForm;