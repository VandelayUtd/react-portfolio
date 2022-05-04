// import { useState } from 'react';
import { Link } from 'react-router-dom';

// import AnimatedLetters from '../animated-leters/animated-letters.component'

import './home.styles.scss'; 

const Home = () => {
    // const [letterClass, setLetterClass] = useState('text-animate')
    // const nameArray = ['d', 'r', 'e', 'w', ' ', 'h', 'a', 'd', 'l', 'e', 'y']
    // const jobArray = [ 'f', 'u', 'l', 'l', ' ', 's', 't', 'a', 'c', 'k', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']


    return(
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm
                    Drew Hadley
                    <br />
                    Full Stack Software Engineer
                </h1>
                <h2> React / Javascript / Ruby on Rails</h2>
                <Link to='/contact' className='flat-button' >CONTACT ME</Link>
            </div>
        </div>
    )
}
export default Home;