import React from 'react'
import TopBar from './Design1/TopBar'
import Footer from './Design1/Footer'

function Index() {
  return (
    <div>
        <TopBar/>
        <div className='section1'>
            <div className='left'>
                <img src="" alt=''/>
            </div>
            <div className='right'>
            <div className='content'>
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
  )
}

export default Index