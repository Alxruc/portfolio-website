import './projects.css';
import { useState } from 'react';
import githubIcon from "/github.svg"
import firefoxIcon from "/simple-firefox.svg"

function ProjectsBuilder({ visibilityClass }) {
    
    const projects = [
        {
            title: "Better Subtitles",
            description: `Use Whisper models to locally transcribe YouTube videos, to get more accurate subtitles, than YouTube offers themselves.
            Comes with a native program which handles the logic and database and a partner browser extension to make the process simpler`,
            tech: ["Rust", "Svelte", "Tauri"],
            img: "",
            links: [
                {
                    type: "Source",
                    link: "https://github.com/Alxruc/better-subtitles"
                }
            ]
        },
        {
            title: "3-PARTITION Tetris",
            description: `Interactive visualization of a proof showing that a simplified version of Tetris is NP-Hard`,
            tech: ["C++"],
            img: "",
            links: [
                {
                    type: "Source",
                    link: "https://github.com/Alxruc/3partition-tetris"
                }
            ]
        },
        {
            title: "Guess The Song",
            description: `Party game web application where players compete who can guess a given song the fastest. The host can input their own choice of songs / playlist directly
            via the Spotify API and players use their phone as buzzers which are connected over Web Sockets.`,
            tech: ["JavaScript", "React"],
            img: "",
            links: [
                {
                    type: "Source",
                    link: "https://github.com/Alxruc/guess-the-song"
                }
            ]
        },
        {
            title: "Natural Neighbor Splines",
            description: `My bachelor thesis: A novel interpolation technique which combines the idea of B-splines (smooth curves) with the Natural Neighbor interpolation technique to create
            smoother surface then Natural Neighbor would create by itself.`,
            tech: ["C++", "CGAL"],
            img: "",
            links: []
        },
        {
            title: "This Website",
            description: `This website uses custom GPU shaders to render the both the background for this projects page and the Julia fractal on the main screen.
            It uses raymarching to draw a 3D slice of the 4D object onto the screen`,
            tech: ["JavaScript", "Three.js", "React"],
            img: "",
            links: [
                {
                    type: "Source",
                    link: "https://github.com/Alxruc/portfolio-website"
                }
            ]
        },
        {
            title: "Japanese Word of the Day",
            description: "A browser extension which gives you a random Japanese word every day for language learning.",
            tech: ["JavaScript"],
            img: "",
            links: [
                {
                    type: "Source",
                    link : "https://github.com/Alxruc/japanese-wotd"
                },
                {
                    type: "Firefox Addons",
                    link: "https://addons.mozilla.org/en-US/firefox/addon/japanese-wotd/"
                }
            ]
        },
    ]


    return(
        <div className={`projects-display ${visibilityClass}`}>
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <div className="project-header">
                        <h3>{project.title}</h3>
                    </div>
                    
                    {project.img ? (
                        <img src={project.img} alt={`${project.title} preview`} className="project-image" />
                    ) : (
                        <div className="project-image-placeholder">
                            [ DEMO_VIEW ]
                        </div>
                    )}
                    
                    <div className="project-info">
                        <p>{project.description}</p>
                        
                        <div className="project-tech">
                            {project.tech.map((techItem, techIndex) => (
                                <span className="tech-tag brutal-tag" key={techIndex}>
                                    {techItem}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="project-links">
                        {project.links.map((linkObj, linkIndex) => (
                            <a 
                                href={linkObj.link} 
                                className="brutalist-btn" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                key={linkIndex}
                            >
                                {linkObj.type}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectsBuilder