import './Contact.css';
const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
