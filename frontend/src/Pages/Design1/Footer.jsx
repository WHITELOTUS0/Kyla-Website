import React from 'react';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import '../../css/footer.css';

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <a href="tel:your-phone-number" className='icon-large' target="_blank">
          <PhoneRoundedIcon />
        </a>
        <a href="mailto:your-email@example.com" target="_blank">
          <EmailIcon />
        </a>
        <a href="https://www.instagram.com/your-instagram-profile" target="_blank">
          <InstagramIcon />
        </a>
        <span>
          <CopyrightIcon />Kyla Busingye 2023
        </span>
      </div>
    </footer>
  );
}

export default Footer;
