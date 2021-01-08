import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer">
        <p className="footer-heading">Connect With Me!</p>
      </section>
      <section className="socials">
        <div className="socials-wrapper">
          <div className="social-icons">
            <a
              className="social-icon-link github"
              href="https://github.com/mscott44"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <i class="fab fa-github" />
            </a>
            <a
              className="social-icon-link linkd"
              href="https://www.linkedin.com/in/moriahs22/"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
      <small className="website-rights"> The Hub © 2020</small>
    </div>
  );
}

export default Footer;
