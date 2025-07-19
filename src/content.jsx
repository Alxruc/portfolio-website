import "./content.css"
import CanvasBuilder from './canvasBuilder.jsx'
import { useEffect, useRef, createContext, useContext } from 'react';

// Create a context to share scroll state with the canvas
export const ScrollContext = createContext();

function ContentBuilder() {
    const sectionRefs = useRef([]);
    const scrollStateRef = useRef({ currentSection: 0, scrollProgress: 0 });

    useEffect(() => {
        // Intersection Observer for precise section detection
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionIndex = sectionRefs.current.indexOf(entry.target);
                        if (sectionIndex !== -1) {
                            scrollStateRef.current.currentSection = sectionIndex;
                            
                            // Dispatch custom event for canvas to listen
                            window.dispatchEvent(new CustomEvent('sectionChange', {
                                detail: { 
                                    section: sectionIndex,
                                    element: entry.target
                                }
                            }));
                        }
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of section is visible
        );

        // Observe all sections
        sectionRefs.current.forEach(section => {
            if (section) observer.observe(section);
        });

        // Scroll progress tracking for smooth animations
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = Math.min(scrollTop / documentHeight, 1);
            
            scrollStateRef.current.scrollProgress = scrollProgress;
            
            // Dispatch scroll progress event
            window.dispatchEvent(new CustomEvent('scrollProgress', {
                detail: { progress: scrollProgress, scrollTop }
            }));
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <div className="title-wrapper">
            <section 
                className="snaptarget title-section" 
                ref={el => sectionRefs.current[0] = el}
                data-section="0"
            >
                <h1>
                    Test Title
                </h1>
            </section>
        </div>
        <div className="content-wrapper">    
            <section 
                className="snaptarget"
                ref={s => sectionRefs.current[1] = s}
                data-section="1"
            >
                <div className="content-section">
                    <h1> Headline </h1>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore nihil labore architecto libero? Reprehenderit consequuntur reiciendis totam! Possimus minima quo quia ipsa adipisci aperiam qui quaerat voluptatem, animi explicabo quidem? </p>
                </div>
                
            </section>
            
            <section 
                className="snaptarget"
                ref={s => sectionRefs.current[2] = s}
                data-section="2"
            >
                <div className="content-section">
                    <h1> Headline 2 </h1>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias hic ullam incidunt quos provident! Fugit debitis ad, eum, cupiditate, omnis nisi aliquam quos voluptatem non explicabo id incidunt quae sequi. </p>
                </div>
            </section> 

            <section
                className="snaptarget"
                ref={s => sectionRefs.current[3] = s}
                data-section="3"
            >
                <div className="content-section">
                    <h1> Headline 3 </h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur autem tempora ut expedita explicabo. Dignissimos impedit laborum explicabo. Adipisci earum dolorum quisquam veniam, eum mollitia sint iste incidunt voluptatem. </p>
                </div>

            </section> 
            
        </div>
        <CanvasBuilder scrollState={scrollStateRef} />
        </>
    )
}

export default ContentBuilder