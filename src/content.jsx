import "./content.css";
import CanvasBuilder from './canvasBuilder.jsx';
import ProjectsBuilder from "./projects.jsx";
import { useState } from 'react';
import AboutBuilder from "./about.jsx";
import ContactBuilder from "./contact.jsx";

function ContentBuilder() {
    const [activeButtonId, setActiveButtonId] = useState('home');
    const [visibleContentId, setVisibleContentId] = useState('home');
    const [hoveringId, setHoveringId] = useState('none');

    const buttons = [
        { id: 'home', label: 'home' },
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
        if (tabId === activeButtonId) return 'visible';
        const activeIndex = tabOrder.indexOf(activeButtonId);
        const thisIndex = tabOrder.indexOf(tabId);
        return thisIndex < activeIndex ? 'hidden-top' : 'hidden-bottom';
    };

    const navElement = (
        <div className="scrollable-nav">
            {buttons.map((button) => (
                <button
                    key={button.id}
                    className={`text-button ${activeButtonId === button.id ? 'active' : ''}`}
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
    );

    return (            
        <div>
            <div className={`home-wrapper ${getContainerClass('home')}`}>
                {navElement}
                
                <div className="name-display">
                    <div className="names">alex ruchti</div>
                    <div style={{ width: '100%', height: '2px', backgroundColor: '#ffffff', margin: "1vh"}}></div>
                    <div style={{ fontFamily: 'monospace', color: '#a0a0a0', fontSize: '1rem', letterSpacing: '0.1em' }}>
                        // Berlin, DE
                    </div>
                </div>
            </div>

            <AboutBuilder navElement={navElement} visibilityClass={getContainerClass('about')} />
            <ProjectsBuilder navElement={navElement} visibilityClass={getContainerClass('projects')} />
            <ContactBuilder navElement={navElement} visibilityClass={getContainerClass('contact')} />
            
            <CanvasBuilder activeButtonId={activeButtonId}/>
        </div>
    )
}

export default ContentBuilder