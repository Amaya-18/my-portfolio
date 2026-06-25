import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <span className="section-tag">Contact</span>
        <span className="section-rule" />
      </div>

      <div className="contact-grid">
        <div className="contact-left">
          <h2 className="contact-heading">
            Let's build something <em>real.</em>
          </h2>
          <p className="contact-sub">
            I'm open to internship opportunities, collaborations, and conversations
            about interesting problems. I reply within 24 hours.
          </p>

          <div className="contact-details">
            <a href="mailto:amayachathu111@gmail.com" className="contact-item">
              <span className="contact-item-label">Email</span>
              amayachathu111@gmail.com
            </a>
            <a href="https://github.com/Amaya-18" target="_blank" rel="noreferrer" className="contact-item">
              <span className="contact-item-label">GitHub</span>
              github.com/Amaya-18
            </a>
            <a href="https://www.linkedin.com/in/amaya-chathumali" target="_blank" rel="noreferrer" className="contact-item">
              <span className="contact-item-label">LinkedIn</span>
              Amaya Chathumali
            </a>
            <span className="contact-item">
              <span className="contact-item-label">Phone</span>
              +94 742 871 308
            </span>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Tell me about the opportunity or project..." />
          <button type="submit">Send message →</button>
        </form>
      </div>

      <div className="footer">
        <span className="footer-copy">© 2025 · Nainamadama, Sri Lanka</span>
        <span className="footer-name">Amaya Chathumali</span>
      </div>
    </section>
  );
}
