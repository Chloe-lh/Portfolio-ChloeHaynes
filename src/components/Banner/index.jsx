import "./styles.css";
export const Banner = () => {
    return(
        <section className="banner">
            <div className="banner-content">
                <h1>Hi! I'm Chloe</h1>
                <p>I am a Computing Science student at the University of Alberta. 
                    I love software dev, data science, and anything creative.</p>
                <p>Check out my projects below!</p>
                 <p className="hint">psst.. press space bar to change colors</p>
                {/* <a href="/Projects" className="btn">View Projects</a> */}
            </div>
        </section>

        
    )
}
