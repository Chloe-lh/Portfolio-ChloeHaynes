import "./styles.css";

export default function Projects(){
    const projects = {
        project1: {
            "title": "Planetary Music Visualizer",
            "description": "interactive generative art project using p5.js to simulate dynamic celestial motion. Particles evolve into planets or asteroids, expanding and moving outward in space with glowing effects. The project explores procedural generation, algorithmic motion, and creative coding for a visually immersive experience.",
            "skills": ["p5js"],
            "demo": "https://openprocessing.org/sketch/2235668",
            "background": "rgb(164, 166, 255)"
        },
        project2: {
            "title": "Mood Tracking App",
            "description": "Developed a mood tracking app in Android Studio as part of a team, featuring offline functionality with Firebase synchronization. Implemented user profiles with searchable follow systems and privacy controls. Integrated a map view to display location-based mood events, filterable by emotional states and user details. Utilized Java, object-oriented programming, and Google Firebase, while following Agile and SCRUM methodologies with GitHub for version control. Ensured reliability through consistent JUnit, Mockito, UI, and integration testing.",
            "skills": ["AndroidStudio", "Java", "Google Firebase"],
            "demo": "https://example.com/project2",
            "background": "rgb(211, 255, 164)"
        },
        project3: {
            "title": "Tweety",
            "description": "Built a command-line application in Python using SQLite to manage enterprise tweet data. The system supported user authentication, tweet searches, replies, retweets, and favorites. Designed secure and optimized SQL queries with pagination and string matching. Collaborated in a team of four using GitHub for version control and project coordination.",
            "skills": ["SQL", "Python"],
            "demo": "https://example.com/project2",
            "background": "rgb(236, 253, 87)"
        },
        project4:{
            "title":"Digital Divide Website",
            "description": "Informative website to provide resources on the Digital Divide in Canada and educate on socio-economic gaps in digital literacy",
            "skills": ["HTML", "CSS", "JavaScript", "Bootstrap"],
            "demo": "https://chloe-lh.github.io/DigitalDivide/",
            "background": "rgb(104, 248, 114)"
        },

    }
    return(
        <section className="projects">
            {Object.entries(projects).map(([key, project])=> (
                <div 
                    className="project-card" 
                    key={key}
                    style={{background: project.background || "#eee" }}
                >
                        <h3>{project.title}</h3>
                        <p className="description">{project.description}</p>
                        <p className="skill"><strong>Skills:</strong>{" "}{project.skills.map((skill, index)=>(
                            <span key={index} className="skill-item">{skill}</span>
                        ))}</p>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">View Demo</a>
                </div>
            ))}
        </section>
    )
}
