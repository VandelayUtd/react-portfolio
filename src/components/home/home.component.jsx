import Loader from 'react-loaders';
import { Link } from 'react-router-dom';


import './home.styles.scss'; 

const Home = () => {


    return(
        <>
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
            <Loader type='pacman' />
        </>
    )
}
export default Home;