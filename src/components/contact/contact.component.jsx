import Loader from 'react-loaders';

import './contact.styles.scss';


const Contact = () => { 

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>Contact</h1>
                </div>
            </div>
            <Loader type='pacman' />
        </>

    )
}

export default Contact;