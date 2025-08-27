import './projects.css';
import { useState } from 'react';
import githubIcon from "/github.svg"
import firefoxIcon from "/simple-firefox.svg"

function ProjectsBuilder() {
    const projects = [
        { 
            id: 'card1', 
            title: 'Full-Stack Web Application: Guess The Song', 
            content: 'Leveraging a React frontend and a simple Express server backend, this web application allows multiple players to participate in a party game, where they compete to see whose song knowledge is the best. It uses the Spotify API so that the host can input songs or even playlist directly from Spotify.',
            logos: [githubIcon],
            links:  ["https://github.com/Alxruc/guess-the-song"]
        },
        {
            id: 'card2',
            title: '3D Website: Portfolio',
            content: 'This very website uses a custom GPU compute shader inside Three.js to render the background particle system efficiently. The main job of the shader being the flowing effect you are currently seeing.',
            logos: [githubIcon],
            links: ["https://github.com/Alxruc/portfolio-website"]
        },
        { 
            id: 'card3', 
            title: 'Bachelorthesis: Natural Neighbor Splines', 
            content: 'The testing of a novel interpolation method, combining the idea of B-splines with the Natural Neighbor interpolation to potentially generate smooth surfaces. The project was written in C++ using the geometry library CGAL for structures like the Voronoi diagram and Delaunay triangulation',
            logos: [],
            links: [] 
        },
        { 
            id: 'card4',
            title: 'Game: 3-PARTITION Tetris', 
            content: 'A tetris clone written in C++ using the graphics library SDL2 to visualize the idea and proof of the hardness of the Tetris clone by turning 3-partition problems into Tetris levels. Inspired by the paper "Tetris is Hard, Even to Approximate" by Breukelaar et al.',
            logos: [githubIcon],
            links: ["https://github.com/Alxruc/3partition-tetris"]
        },
        {
            id: 'card5',
            title: 'Browser Extension: Japanese Word of the Day',
            content: 'A simple browser extension designed to aid language learning, by giving the user a random Japanese word every day along with its reading and dictionary entry.',
            logos: [githubIcon, firefoxIcon],
            links: ["https://github.com/Alxruc/japanese-wotd", "https://addons.mozilla.org/en-US/firefox/addon/japanese-wotd/"]
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevious = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const getCardClass = (index) => {
        if (index === activeIndex) return 'visible-card';
        
        const prevIndex = (activeIndex - 1 + projects.length) % projects.length;
        const nextIndex = (activeIndex + 1) % projects.length;
        
        if (index === prevIndex) return 'hidden-card-left';
        return 'hidden-card-right';
    };

    return(
        <>
            <div className="projects-carousel">
                {projects.map((project, index) => (
                    <div 
                        key={project.id} 
                        id={project.id} 
                        className={`project-card ${getCardClass(index)}`}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.content}</p>


                        {/* Display links if they exist and are not empty */}
                        {project.links && project.links.length > 0 && 
                        project.logos && project.logos.length === project.links.length && (
                            <div className="project-links">
                                {project.links.map((link, linkIndex) => (
                                    <a key={linkIndex} href={link} target="_blank" rel="noopener noreferrer">
                                        <img src={project.logos[linkIndex]} alt="project logo" />
                                    </a>
                                ))}
                            </div>
                        )}
                        
                    </div>
                ))}
                
            </div>
            <div className="project-navigation">
                    <button className="previous" onClick={handlePrevious}>
                        &lt;
                    </button>
                    <button className="next" onClick={handleNext}>
                        &gt;
                    </button>
                </div>
        </>
    )
}

export default ProjectsBuilder