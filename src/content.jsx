import "./content.css";
import CanvasBuilder from './canvasBuilder.jsx';
import ProjectsBuilder from "./projects.jsx";
import { useState } from 'react';

function ContentBuilder() {
    const [activeButtonId, setActiveButtonId] = useState('home');
    
    const buttons = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    const handleButtonClick = (buttonId) => {
        setActiveButtonId(buttonId)
    };

    return (            
        <div>
            {/* Home Tab */}
            <div className={`name-display ${activeButtonId === 'home' ? 'visible' : 'hidden'}`}>
                <div className="firstname">
                    
                    <div className="gradient-line"></div>
                </div>
                <div className="lastname">
                  
                    <div className="gradient-line-back"></div>
                </div>

            </div>

            {/* About Tab */}
            <div className={`two-column-grid ${activeButtonId === 'about' ? 'visible' : 'hidden'}`}>
                <div className="card">
                    <h2> Education </h2>
                    <div className="card-content">
                       
                        <div className="item">
                            Bachelor of Science in Computer Science, Technical University Berlin <em>(Completed)</em>
                        </div>

                        <div className="item">
                            Master of Science in Computer Science, Technical University Berlin <em>(In Progress)</em>
                        </div>
                    </div>                    
                </div>
                <div className="card">
                    <h2> Technologies </h2>
                    <div className="card-content">
                        <span className="list-title">Languages</span>
                        <div className="item">
                            <div>
                                <strong>Primary:</strong> C++, JavaScript, Python
                            </div>
                            <div>
                                <strong>Secondary:</strong> Java, C, C#
                            </div>
                        </div>
                        <span className="list-title">Frameworks & Libraries</span>
                        <div className="item">
                            <div>
                                <strong>JavaScript:</strong> React, Node.js, ThreeJS
                            </div>
                            <div>
                                <strong>C++:</strong> CGAL, SDL2, Eigen
                            </div>
                            <div>
                                <strong>Python:</strong> Pandas, PyTorch, SciPy, Numpy
                            </div>
                        </div>

                        <span className="list-title">Tools & Platforms</span>
                        <div className="item">
                            Git, Docker, Build Managers (i.e. CMake)
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Tab */}
            <div className={`projects-section ${activeButtonId === 'projects' ? 'visible' : 'hidden'}`}>
                <ProjectsBuilder></ProjectsBuilder>
            </div>

            {/* Contact Tab */}
            <div className={`contact-section ${activeButtonId === 'contact' ? 'visible' : 'hidden'}`}>
                <div className="contact-card">
                    <h1>Contact Me</h1>
                    <h2 className="item">
                        Email: alex@ruchti.dev
                    </h2>
                </div>
            </div>

            {/* Canvas */}
            <CanvasBuilder activeButtonId={activeButtonId}/>

            <div className="bottom-navigation">
                {buttons.map((button) => (
                    <button
                        key={button.id}
                        className="nav-button"
                        onClick={() => handleButtonClick(button.id)}
                    >
                        {button.label}
                    </button>
                ))}
            </div>
        </div>
        
    )
}

export default ContentBuilder