import "./content.css"
import CanvasBuilder from './canvasBuilder.jsx'
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


let allowScroll = true; // sometimes we want to ignore scroll-related stuff
let currentIndex = 0;
let swipePanels, scrollTimeout, intentObserver;

function ContentBuilder() {
    useEffect(() => {
        function snap(destination) {
            if (Math.abs(destination - window.scrollY) < 3) {
                scrollTo(window.scrollX, destination);
            } else if (Math.abs(destination - window.scrollY) < 200) {
                scrollTo(window.scrollX, window.scrollY + ((destination - window.scrollY) / 2));
                setTimeout(snap, 20, destination);
            }
        }
        var timeoutId = null;
        addEventListener("scroll", function() {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(snap, 200, parseInt(document.getElementById('snaptarget').style.top));
        }, true);
    }, [])



    return (
        <>
        <div className="content-wrapper">
            <section className="snaptarget title-section">
                <h1>
                    Test Title
                </h1>
            </section>
            <section className="snaptarget content-section">
                <h1> Headline </h1>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore nihil labore architecto libero? Reprehenderit consequuntur reiciendis totam! Possimus minima quo quia ipsa adipisci aperiam qui quaerat voluptatem, animi explicabo quidem? </p>
            </section>
            
            <section className="snaptarget content-section">
                <h1> Headline 2 </h1>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias hic ullam incidunt quos provident! Fugit debitis ad, eum, cupiditate, omnis nisi aliquam quos voluptatem non explicabo id incidunt quae sequi. </p>
            </section>  
            
        </div>
        <CanvasBuilder />
        </>
    )
}

export default ContentBuilder