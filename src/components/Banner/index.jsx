import "./styles.css";
export const Banner = () => {
    return(
        <section className="banner">
            <div className="banner-content">
                <h1>Hi! I'm Chloe</h1>
                <p>I am a 4th year Computing Science Student at the University of Alberta. 
                    I love software dev, data science, and anything creative. 
                    I am currently seeking internship opportunities where I can contribute, learn,
                    and grow as a developer.</p>
                <p>Check out my projects below!</p>
                 <p className="hint">psst.. press space bar to change colors</p>
                {/* <a href="/Projects" className="btn">View Projects</a> */}
            </div>
        </section>

        
    )
}
