import { Link, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as HomeIcon } from '../../assets/images/home-icon.svg'

import './sidebar.styles.scss';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SideBar = () => {
    return(
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <HomeIcon className='home-icon' />
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/' >
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about' >
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact' >
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a 
                        target='_blank' 
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/drew-k-hadley/'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color='4d4d4e' />
                    </a>
                </li>
                <li>
                    <a 
                        target='_blank' 
                        rel='noreferrer'
                        href='https://github.com/VandelayUtd'
                    >
                        <FontAwesomeIcon icon={faGithub} color='4d4d4e' />
                    </a>
                </li>
            </ul>
        
        </div>
    )
}

export default SideBar