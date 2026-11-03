import "./Contact.css";

const Contact = () => {
  const handleSubmit = (event) => event.preventDefault();

  return (
    <main className="contact-page">
      <header className="contact-header">
        <span className="contact-eyebrow">Let&apos;s talk</span>
        <h1>Plan a journey made for you.</h1>
        <p>
          Tell us where you would like to go. We will help turn your travel
          idea into a memorable experience.
        </p>
      </header>

      <section className="contact-layout">
        <aside className="contact-details">
          <div>
            <span className="contact-detail-label">Email us</span>
            <a href="mailto:hello@tourice.com">hello@tourice.com</a>
          </div>
          <div>
            <span className="contact-detail-label">Call us</span>
            <a href="tel:+355690000000">+355 69 000 0000</a>
          </div>
          <div>
            <span className="contact-detail-label">Visit us</span>
            <p>Tirana, Albania</p>
          </div>

          <div className="contact-note">
            <span aria-hidden="true">&#10022;</span>
            <p>
              We usually reply within one business day and are happy to help
              with any travel question.
            </p>
          </div>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field-row">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
          </div>
          <label>
            Destination
            <input type="text" name="destination" placeholder="Where would you like to go?" />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell us a little about your dream trip..." required />
          </label>
          <button type="submit">
            Send message <span aria-hidden="true">&#8599;</span>
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
