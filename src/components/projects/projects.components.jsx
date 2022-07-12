import './projects.styles.scss';

const Projects = () => {

    return (
        <div className='container projects-page'>
            <div className='text-zone'>
            <h1>Projects</h1>

            <ul className='project-list'>

                <li>
                    <span>Film Fax</span>
                    <p>An application for cinefiles to get quick Film Facts and add or remove films from a watch list</p>
                    <div className='button-container'>
                        <a className='flat-button' 
                                href='https://exquisite-nasturtium-1de152.netlify.app/' 
                                rel='noopener noreferrer'  
                                target='_blank' 
                            >Deployed</a> 
                        <a className='flat-button' href='https://github.com/VandelayUtd/movie-phone' rel='noopener noreferrer' target='_blank'>Repository</a>
                    </div>
                </li>
                <li>
                    <span>Suburban Outfitters</span>
                    <p>eCommerce site featuring User Auth, Sign In with Google and Stripe Payment integration</p>
                    <div className='button-container'>
                        <a className='flat-button' 
                            href='https://imaginative-meerkat-6aa56a.netlify.app/' 
                            rel='noopener noreferrer'  
                            target='_blank' 
                        >Deployed</a>                    
                        <a className='flat-button' 
                            href='https://github.com/VandelayUtd/suburban-outfitters'  
                            rel='noopener noreferrer' 
                            target='_blank'
                        >Repository</a>
                    </div> 
                </li>
                <li>
                    <span>Rotten Potatoes</span>
                    <a className='flat-button' href='https://github.com/VandelayUtd/rotten-potatoes' rel='noopener noreferrer' target='_blank'>Repository</a>
                </li>
                <li>
                    <span>Monster Rolodex</span>
                    <a className='flat-button' href='https://github.com/VandelayUtd/monster-rolodex' rel='noopener noreferrer' target='_blank'>Repository</a>
                </li>
            
            </ul>
            </div>
        </div>
    );
};
export default Projects;