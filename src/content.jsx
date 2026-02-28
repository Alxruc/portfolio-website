import "./content.css";
import CanvasBuilder from './canvasBuilder.jsx';
import ProjectsBuilder from "./projects.jsx";
import { useState, useRef } from 'react';

function ContentBuilder() {
    const [activeButtonId, setActiveButtonId] = useState('home');
    // one keeps track of button we pressed which triggers css to move away canvas
    // the other then shows the other tabs (about, projects etc.) when canvas is done moving
    const [visibleContentId, setVisibleContentId] = useState('home');
    const [hoveringId, setHoveringId] = useState('none');

    const buttons = [
        { id: 'about', label: 'about' },
        { id: 'projects', label: 'projects' },
        { id: 'contact', label: 'contact' }
    ];

    const tabOrder = ['home', 'about', 'projects', 'contact'];

    const handleButtonClick = (buttonId) => {
        if (buttonId === activeButtonId) return;
        
        setActiveButtonId(buttonId);
        setVisibleContentId(buttonId); 
    };

    const getContainerClass = (tabId) => {
        if (tabId === activeButtonId) return 'visible'; // It is the active tab

        const activeIndex = tabOrder.indexOf(activeButtonId);
        const thisIndex = tabOrder.indexOf(tabId);

        // If this tab's position in the array is before the active one, it goes to the top.
        // If it's after, it goes to the bottom.
        return thisIndex < activeIndex ? 'hidden-top' : 'hidden-bottom';
    };

    return (            
        <div>
            {/* Home Tab */}
            <div className={`name-display ${getContainerClass('home')}`}>
                <div className="names">
                alex ruchti
                </div>
                
                <div className="nav-menu">
                    {buttons.map((button) => (
                        <button
                            key={button.id}
                            className="text-button"
                            onClick={() => handleButtonClick(button.id)}
                            onMouseEnter={() => setHoveringId(button.id)}
                            onMouseLeave={() => setHoveringId('none')}
                        >
                            <span className="hover-indicator">
                                {hoveringId === button.id ? "> " : ""}
                            </span>
                            {button.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className={`about-display ${getContainerClass('about')}`}>
                <div className="about-card">
                    <div className="about-head">
                        Education & Work
                    </div>
                    <div className="about-content">
                        <ul className="about-list">
                            <li className="list-item">
                                <span className="item-title">B.Sc. Computer Science <span style={{ textTransform: 'lowercase' }}>at</span> Technical University Berlin</span>
                                <span className="item-desc"> </span>
                                <span className="item-date">2021 — 2025</span>
                            </li>

                            <li className="list-item">
                                <span className="item-title">M.Sc. Computer Science <span style={{ textTransform: 'lowercase' }}>at</span> Technical University Berlin</span>
                                <span className="item-desc"> </span>
                                <span className="item-date">2025 — 2027 (est.)</span>
                            </li>

                            <li className="list-item">
                                <span className="item-title">Web Developer <span style={{ textTransform: 'lowercase' }}>at</span> PflegeHelfer24</span>
                                <span className="item-desc"> Full-stack development using Ruby on Rails </span>
                                <span className="item-date">2025 — PRESENT</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="about-card">
                    <div className="about-head">
                        Technologies
                    </div>
                    <div className="about-content">
                        {/* Legend */}
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            marginBottom: '16px', 
                            paddingBottom: '8px', 
                            borderBottom: '2px solid #333333'
                        }}>
                            <span className="tech-title">
                                Languages
                            </span>
                            <span className="tech-title" style={{ textAlign: 'right' }}>
                                Frameworks & Libs
                            </span>
                        </div>
                        <div style={{ marginBottom: '2rem' }}>
                            {/* C++ */}
                            <div className="tech-list">
                                <div style={{ minWidth: '110px', flexShrink: 0 }}>
                                    <div className="tech-tag primary">
                                        C++
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    <div className="tech-tag secondary">CGAL</div>
                                    <div className="tech-tag secondary">Eigen</div>
                                    <div className="tech-tag secondary">SDL2</div>
                                </div>
                            </div>

                            {/* Python */}
                            <div className="tech-list">
                                <div style={{ minWidth: '110px', flexShrink: 0 }}>
                                    <div className="tech-tag primary">
                                        Python
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    <div className="tech-tag secondary">PyTorch</div>
                                    <div className="tech-tag secondary">pandas</div>
                                    <div className="tech-tag secondary">NumPy</div>
                                    <div className="tech-tag secondary">SciPy</div>
                                </div>
                            </div>
                            
                            {/* js */}
                            <div className="tech-list">
                                <div style={{ minWidth: '110px', flexShrink: 0 }}>
                                    <div className="tech-tag primary">
                                        JavaScript
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    <div className="tech-tag secondary">React</div>
                                    <div className="tech-tag secondary">Three.js</div>
                                    <div className="tech-tag secondary">Node.js</div>
                                    <div className="tech-tag secondary">Express.js</div>
                                </div>
                            </div>

                            {/* Ruby */}
                            <div className="tech-list">
                                <div style={{ minWidth: '110px', flexShrink: 0 }}>
                                    <div className="tech-tag primary">
                                        Ruby
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    <div className="tech-tag secondary">Rails</div>
                                </div>
                            </div>                           
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <div style={{ 
                                marginBottom: '10px', 
                                paddingBottom: '8px', 
                                borderBottom: '2px solid #333333'
                            }}>
                                <span className="tech-title">
                                    Familiar With
                                </span>
                            </div>
                            
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                <div className="tech-tag secondary">C</div>
                                <div className="tech-tag secondary">Rust</div>
                                <div className="tech-tag secondary">Java</div>
                            </div>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <div style={{ 
                                marginBottom: '10px', 
                                paddingBottom: '8px', 
                                borderBottom: '2px solid #333333'
                            }}>
                                <span className="tech-title">
                                    Other
                                </span>
                            </div>
                            
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                <div className="tech-tag secondary">Git</div>
                                <div className="tech-tag secondary">Docker</div>
                                <div className="tech-tag secondary">Build Managers</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Projects */}
            <ProjectsBuilder visibilityClass={getContainerClass('projects')}></ProjectsBuilder>
            {/* Canvas */}
            <CanvasBuilder activeButtonId={activeButtonId}/>
        </div>
        
    )
}

export default ContentBuilder