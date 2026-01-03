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
                 <p className="hint">psst.. press n to change colors</p>
                {/* <a href="/Projects" className="btn">View Projects</a> */}
            </div>
            <div className="links">
                <div className="link">
                    <img src="src\assets\search-alt-1-svgrepo-com.svg"></img>
                    <a href="https://www.linkedin.com/in/chloe-hayness/">linkedin.com/in/chloe-hayness/</a>
                </div>
                <div className="link">
                    <img src="src\assets\search-alt-1-svgrepo-com.svg"></img>
                    <a href="https://github.com/Chloe-lh">github.com/Chloe-lh</a>
                </div>
            </div>
        </section>

        
    )
}
