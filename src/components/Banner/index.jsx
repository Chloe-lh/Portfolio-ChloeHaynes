import "./styles.css";

export const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-content">
                <h1>Hello! I'm Chloe Haynes</h1>
                <p>I am a 4th year Computing Science Student at the University of Alberta. 
                    I love software dev, data science, and anything creative. 
                    I am currently seeking internship opportunities where I can contribute, learn,
                    and grow as a developer.</p>
                {/* <h2>Check out my projects below!</h2> */}
                <p className="hint">psst.. press n to change colors</p>
                {/* <a href="/Projects" className="btn">View Projects</a> */}
            </div>
        </section>
    );
};
