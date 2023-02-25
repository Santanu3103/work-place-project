import React from 'react'
import Rafiki from '../../../assets/rafiki.png'
import './index.css'
function BannerImage() {
  return (
    <div className='section4-main'>
      <div>
        <img src={Rafiki} alt="logo" />
      </div>
      <div className='sub-main'>
        <div>
          <p className='main-text'>Get Matched The Most Valuable Jobs, Just Drop Your CV at Staffing Solutions</p>
          <p className='sub-text'>In the subject line of email, write your name, the description of the position you want to apply</p>
        </div>
        <div>
        <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg> Upload your CV
        </button>
        </div>
      </div>

    </div>
  )
}

export default BannerImage