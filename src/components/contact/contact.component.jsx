import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Loader from 'react-loaders';

import './contact.styles.scss';


const Contact = () => { 

    const form = useRef();

    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qxjk4uo', 'contact_form', form.current, '1ARBd0KjSbtFZeIjL')
        .then((result) => {
            alert('Message successfully sent!')
            window.location.reload(false)
        }, (error) => {
            console.log(error.text);
            alert('Failed to send the message, please try again or send directly to drewhadley.dev@gmail.com')
        });
    };

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>Contact</h1>
                    <p>Please feel free to send an email to drewhadley.dev@gmail.com with the form below</p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={handleSubmit}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required /> 
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required ></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button'  value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>

    )
}

export default Contact;