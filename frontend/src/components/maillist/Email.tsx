import React from 'react';

// import the css file
import './email.css';


const Email = () => {
  return (
    <div className='email'>
      <h1 className='email_title'>Save Time!</h1>
      <span className='email_desc'>Sign Up Now.</span>
      <div className='email_input'>
        <input type='text' placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Email;