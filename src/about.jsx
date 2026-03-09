import "./about.css"

function AboutBuilder({ visibilityClass, navElement }) {
    return (
        <div className={`about-section-wrapper ${visibilityClass}`}>
            {navElement}
            
            <div className="brutalist-section-header">
                <div className="header-top">
                    <h2 className="section-title">ABOUT</h2>
                </div>
                <p className="section-subtitle">
                    // Education and technical expertise.
                </p>
            </div>

            <div className="about-display">
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
                            {/* C & C++ */}
                            <div className="tech-list">
                                <div style={{ minWidth: '110px', flexShrink: 0 }}>
                                    <div className="tech-tag primary">
                                        C & C++
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
        </div>
    )
}

export default AboutBuilder