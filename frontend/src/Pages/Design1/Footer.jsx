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
        <a href="tel:your-phone-number" className='icon-large'>
          <PhoneRoundedIcon />
        </a>
        <a href="mailto:your-email@example.com">
          <EmailIcon />
        </a>
        <a href="https://www.instagram.com/your-instagram-profile">
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
