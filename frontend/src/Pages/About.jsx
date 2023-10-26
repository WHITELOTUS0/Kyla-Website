import React from 'react'
import TopBar from './Design1/TopBar'
import Footer from './Design1/Footer'
import gamer from "../assets/image4.jpeg"

function About() {
  return (
    <div className='about'>
      <div className='sections1'>
        <TopBar/>
          {/* <p>About Page</p> */}
          <div className='section1'>
            <div className='leftside'>
                <img src={gamer} alt=''/>
            </div>
            <div className='rightside'>
            <div className='content'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic 
                perspiciatis eveniet libero, iste ratione quae? Obcaecati deleniti
                deleniti odio distinctio a in, nulla nobis, magni necessitatibus natus itaque,
                 voluptatem corrupti.</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic 
                perspiciatis eveniet libero, iste ratione quae? Obcaecati deleniti
                deleniti odio distinctio a in, nulla nobis, magni necessitatibus natus itaque,
                 voluptatem corrupti.</p>  
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic 
                perspiciatis eveniet libero, iste ratione quae? Obcaecati deleniti
                deleniti odio distinctio a in, nulla nobis, magni necessitatibus natus itaque,
                 voluptatem corrupti.</p> 
            </div>
            </div>
            </div>
        <Footer/>
      </div>
    </div>
  )
}

export default About