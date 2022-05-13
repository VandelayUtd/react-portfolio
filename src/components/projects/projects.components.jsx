import './projects.styles.scss';

const Projects = () => {

    return (
        <div className='container projects-page'>
            
            <ul className='project-list'>
                <li className='project-link'>
                    <a href='https://imaginative-meerkat-6aa56a.netlify.app/' rel='noopener noreferrer'  target='_blank' >Suburban Outfitters | Deployed</a>
                </li>
                <li>
                    <a href='https://github.com/VandelayUtd/suburban-outfitters'  rel='noopener noreferrer' target='_blank'>Suburban Outfitter | Repository</a>
                </li>
                <li>
                    <a href='https://github.com/VandelayUtd/movie-phone' rel='noopener noreferrer' target='_blank'>Movie Phone | Repository</a>
                </li>
                <li>
                    <a href='https://github.com/VandelayUtd/rotten-potatoes' rel='noopener noreferrer' target='_blank'>Rotten Potatos | Repository</a>
                </li>
            </ul>
        </div>
    );
};
export default Projects;