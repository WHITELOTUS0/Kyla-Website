import React from 'react'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import '../../css/footer.css'

function Footer() {
  return (
    <footer >
        <div className='footer'>
            <span className='icon-large'><PhoneRoundedIcon/></span>
            <span><EmailIcon/></span>
            <span><InstagramIcon/></span>
            <span><CopyrightIcon/></span>
        </div>
    </footer>
  )
}

export default Footer