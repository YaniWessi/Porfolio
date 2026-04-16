import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <h2 className="footer-headline">Let's build<br />something great.</h2>
          <div className="social-links">
            <a href="mailto:yannickwessidjam@gmail.com" className="social-link">
              <span className="social-icon">✉</span>
              <span>yannickwessidjam@gmail.com</span>
            </a>
            <a href="https://www.Linkedin.com/in/yannickw" className="social-link" target="_blank" rel="noreferrer">
              <span className="social-icon">in</span>
              <span>linkedin.com/in/yannickw</span>
            </a>
            <a href="https://github.com/YanniWessi" className="social-link" target="_blank" rel="noreferrer">
              <span className="social-icon">gh</span>
              <span>github.com/YanniWessi</span>
            </a>
          </div>
        </div>

        <div className="footer-right">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <textarea placeholder="Message" className="form-input form-textarea" rows={5} />
            <button type="submit" className="btn btn-primary form-submit">Send Message</button>
          </form>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Yannick Wessidjam</p>
    </footer>
  );
};

export default Footer;
