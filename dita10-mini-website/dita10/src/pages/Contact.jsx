import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Na Kontaktoni</h1>
      <p>
        Nëse keni ndonjë pyetje, sugjerim apo kërkesë, mos hezitoni të na shkruani përmes formës më poshtë.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label>
            Emri juaj:
            <input type="text" name="name" placeholder="Shkruani emrin tuaj" required />
          </label>
        </div>

        <div className="form-group">
          <label>
            Email:
            <input type="email" name="email" placeholder="Shkruani email-in tuaj" required />
          </label>
        </div>

        <div className="form-group">
          <label>
            Mesazhi:
            <textarea name="message" rows="4" placeholder="Shkruani mesazhin tuaj..." required></textarea>
          </label>
        </div>

        <button type="submit">Dërgo</button>
      </form>
    </div>
  );
};

export default Contact;