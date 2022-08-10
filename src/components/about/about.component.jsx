import './about.styles.scss';

import {
   
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faSketch,
  } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const About = () => {
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        About Me
                    </h1>
                    <p>I'm a Full Stack Software Engineer based out of Brooklyn, New York, and a recent Flatiron School Grad. Proficient in React, JavaScript, and Ruby on Rails with a zeal for creative problem solving. A problem is just progress that hasn't happened yet.</p>
                    <p>
                        My background ranges from the multi-tiered music industry to working for the CTO of Fox as an assistant. So even before writing my first line of code, past experiences have demanded the mental acumen to quickly assess problems and their possible solutions
                        while anticipating variables that could more or less interfere.
                    </p>
                    <p>I approach problems with joyful tenacity and enthusiastiasm to collaborate and learn with other creative minds.</p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faSketch} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
} 
export default About 