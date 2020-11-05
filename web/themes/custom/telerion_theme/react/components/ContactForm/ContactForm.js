import React from 'react';

import styles from './ContactForm.module.scss';

const contactForm = (props) => {
  return (
    <div className={'contact-form-wrapper ' + styles.ContactForm}>
      <div className='title'>Feel free to contact me and say hello!</div>
      <form className='contact-form'>
        <input type='text' className='field-name' placeholder='Your name' />
        <input type='email' className='field-email' placeholder='E-mail address' />
        <textarea className='field-message' placeholder='Your message here...' />
        <input type='submit' className='submit-btn' value='Send Message' />
      </form>
    </div>
  )
}

export default contactForm;
