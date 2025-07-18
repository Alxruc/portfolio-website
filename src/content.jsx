import "./content.css"

function ContentBuilder() {


    return (
        <>
        <div className="title-wrapper">
            <section className="title-section">
                <h1>
                    Test Title
                </h1>
            </section>
        </div>
        <div className="content-wrapper">
            <section className="content-section">
                <h1> Headline </h1>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore nihil labore architecto libero? Reprehenderit consequuntur reiciendis totam! Possimus minima quo quia ipsa adipisci aperiam qui quaerat voluptatem, animi explicabo quidem? </p>
            </section>
            
            {/* empty sections the threejs mesh will wander here */}
            <section className="content-section">
            </section> 
            <section className="content-section">
            </section> 
            
            <section className="content-section">
                <h1> Headline 2 </h1>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias hic ullam incidunt quos provident! Fugit debitis ad, eum, cupiditate, omnis nisi aliquam quos voluptatem non explicabo id incidunt quae sequi. </p>
            </section>

            
        </div>
        </>
    )
}

export default ContentBuilder