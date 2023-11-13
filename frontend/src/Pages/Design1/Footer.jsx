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
        <a href="+256 774 221442" className="icon-large" target="_blank">
          <PhoneRoundedIcon />
        </a>
        <span> </span>
        <a href="kyla.busingye@akamom.org" target="_blank">
          <EmailIcon />
        </a>
        <span> </span>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
        <span></span>
        <span>
          <CopyrightIcon />
          GRADE MIX'N MATCH 2023
        </span>
      </div>
    </footer>
  );
}

export default Footer;
