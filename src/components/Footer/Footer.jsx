import "./Footer.css";
import footerLinks from "../../data/footerLinks";
import logo from "../../assets/images/TR-Logo-White.png";


import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGooglenews } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <img src={logo} alt="TechResearch" />

          <p>
            Your trusted source for technology news, research, and insights, since 2020.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaXTwitter />
            <FaLinkedinIn />
            <SiGooglenews />
          </div>
        </div>

        <div className="footer-links">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div className="footer-column" key={title}>
              <h4>{title}</h4>

              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 TechResearch. All Rights Reserved.</p>
        <p>Privacy Policy | CCPA</p>
      </div>
    </footer>
  );
}

export default Footer;