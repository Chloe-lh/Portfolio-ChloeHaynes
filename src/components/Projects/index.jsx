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
            "title": "Bao Book - Mood Tracking App",
            "description": "Developed a mood tracking app in Android Studio as part of a team, featuring offline functionality with Firebase synchronization. Implemented user profiles with searchable follow systems and privacy controls. Integrated a map view to display location-based mood events, filterable by emotional states and user details. Utilized Java, object-oriented programming, and Google Firebase, while following Agile and SCRUM methodologies with GitHub for version control. Ensured reliability through consistent JUnit, Mockito, UI, and integration testing.",
            "tools": ["AndroidStudio", "Java", "Google Firebase"],
            "demo": false,
            "background": "rgb(211, 255, 164)"
        },
        project3: {
            "title": "Tweety",
            "description": "Built a command-line application in Python using SQLite to manage enterprise tweet data. The system supported user authentication, tweet searches, replies, retweets, and favorites. Designed secure and optimized SQL queries with pagination and string matching. Collaborated in a team of four using GitHub for version control and project coordination.",
            "tools": ["SQL", "Python"],
            "demo": false,
            "background": "rgb(236, 253, 87)"
        },
        project4:{
            "title":"Digital Divide Website",
            "description": "Informative website to provide resources on the Digital Divide in Canada and educate on socio-economic gaps in digital literacy",
            "tools": ["HTML", "CSS", "JavaScript", "Bootstrap"],
            "demo": "https://chloe-lh.github.io/DigitalDivide/",
            "background": "rgb(104, 248, 114)"
        },
        project5:{
            "title":"Suduko Solver",
            "description":"I built a Sudoku solver using Constraint Satisfaction Problem (CSP) techniques, combining backtracking search, constraint propagation (via the AC-3 algorithm), and variable selection heuristics like MRV and the degree heuristic. The puzzle is modeled as a grid of variable domains that dynamically update to maintain consistency. I also visualized solver performance using Matplotlib, comparing strategies based on nodes expanded. This project strengthened my understanding of AI problem-solving, CSPs, and performance analysis in Python.",
            "tools": ["Python", "Matplotlib"],
            "demo": false,
            "background": "rgb(252, 100, 255)"
        },
        project6:{
            "title":"Gazprea Compiler",
            "description":"Fully functional compiler based on IBMs coding language Gazprea. Utilizes parsing and compiler research and technologies with ANTLR, LLVM, and MLIR. Our compiler works in 6 passes to parse code into an AST tree, attach semantic and scope information, constant folding, and finally MLIR code generation. Ability to handle complex coding logic such as arrays, structs, tuples, vectors etc. This project was completed in a group of 3 in Ronald Unarus Compiler Design course at the University of Alberta",
            "tools": ["ANTLR", "C++", "LLVM","MLIR","Clang"],
            "demo": false,
            "background": "rgba(100, 255, 252, 1)"
        },
        project7:{
            "title":"Golden - Socially Distributed Networking Platform",
            "description":"Fully functional compiler based on IBMs coding language Gazprea. Utilizes ANTLR, LLVM, and MLIR which parses input into an AST tree then builds semantics on later passes. Ability to handle complex coding logic such as arrays, structs, tuples, vectors etc.",
            "tools": ["Python", "Django","CSS","HTML"],
            "demo": "https://github.com/Chloe-lh/Social-Gold",
            "background": "rgba(255, 100, 128, 1)"
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
                        <h2>{project.title}</h2>
                        <p className="description">{project.description}</p>
                        {(project.skills || project.tools) && (
                            <p className="skill" style={{fontWeight: 'bold'}}>Tools{" "}{(project.skills || project.tools).map((skill, index)=>(
                                <span key={index} className="skill-item">{skill}</span>
                            ))}</p>
                        )}
                        {project.demo!== false && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">View Demo</a>
                        )}
                </div>
            ))}
        </section>
    )
}
