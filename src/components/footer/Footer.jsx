import React from "react";
import insta from "./../../assets/images/Insta.png";
import facebook from "./../../assets/images/facebook.png";
import twitter from "./../../assets/images/twitter.png";
import youtube from "./../../assets/images/youtube.png";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <b className="copyRight">&copy; My Exam Doctor, 2020</b>
      <nav className="refs">
        <img src={insta} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={youtube} alt="youtube" />
      </nav>
    </footer>
  );
};

export default Footer;
