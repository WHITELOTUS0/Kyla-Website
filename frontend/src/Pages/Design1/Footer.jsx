import React from "react";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "../../css/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <span className="icon-large">
          <PhoneRoundedIcon />
        </span>
        <span>
          <a
            href="kyla.busingye@akamom.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
        </span>
        <span>
          <a
            href="https://www.instagram.com/your_instagram_username/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </span>
        <span>
          <CopyrightIcon />
          Kyla Busingye 2023
        </span>
      </div>
    </footer>
  );
}

export default Footer;
