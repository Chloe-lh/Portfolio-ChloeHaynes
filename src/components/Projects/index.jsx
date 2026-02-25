import "./styles.css";

export default function Projects(){
    const projects = {
        gazprea:{
            "title":"Gazprea Compiler",
            "description":"Fully functional compiler based on IBMs coding language Gazprea. This process required a full compiler\
             pipeline built on lexical analysis and bottom-up parsing using ANTLR and MLIR. Gazprea is a language composed of complex \
             data structures like arrays, vectors, structs, generators, tuples, and more, which required complete understanding of syntax, \
             semantics, and storage. I personally managed our abstract syntax tree and data organization, constant folding to increase performance, \
             and error checking in input. Our compiler works in 6 passes to parse code into an AST tree, attach semantic and scope information, constant folding,\
              and finally MLIR code generation. This work required careful attention to correctness, performance, and validation. This project was completed \
              in a group of 3 in Ronald Unarus Compiler Design course at the University of Alberta",
            "tools": ["ANTLR", "C++", "LLVM","MLIR","Clang"],
            "demo": false,
            "background": "rgba(100, 255, 252, 1)"
        },
        golden:{
            "title":"Golden - Socially Distributed Networking Platform",
            "description": "Full-stack social networking platform using Django REST APIs. Allows authors to post, follow, and \
            interact across nodes. Implemented distributed communication via inbox model, ensuring likes, comments, and follow \
            requests propagate across nodes using Activity Pub push architecture. Access control logic for public, listed, and \
            friends-only entries enforced across local and remote notes. Developed in a team of 6 using agile scrum practices.",
            "tools": ["Python", "Django","CSS","HTML"],
            "demo": "https://github.com/Chloe-lh/Social-Gold",
            "background": "rgba(255, 141, 162, 1)"
        },
        BaoBook: {
            "title": "BaoBook - Mood Tracking App",
            "description": "Developed a mood tracking app in Android Studio as part of a team, featuring offline \
            functionality with Firebase synchronization. Implemented user profiles with searchable follow systems and \
            privacy controls. Integrated a map view to display location-based mood events, filterable by emotional states\
             and user details. Utilized Java, object-oriented programming, and Google Firebase, while following Agile and \
             SCRUM methodologies with GitHub for version control. Ensured reliability through consistent JUnit, Mockito, UI, \
             and integration testing.",
            "tools": ["AndroidStudio", "Java", "Google Firebase"],
            "demo": false,
            "background": "rgb(211, 255, 164)"
        },
        project3: {
            "title": "Tweety",
            "description": "Built a command-line application in Python using SQLite to manage enterprise tweet data. The system supports \
             user authentication, tweet searches, replies, retweets, and favorites. Implemented a relational database model to efficiently organize tweets, users, and interactions. Designed secure and optimized SQL queries with pagination \
            and string matching, protecting against SQL injection attacks through parameterized queries. Collaborated in a team of four using GitHub for version control and project coordination.",
            "tools": ["SQL", "Python"],
            "demo": false,
            "background": "rgb(236, 253, 87)"
        },
        planets: {
            "title": "Planetary Music Visualizer",
            "description": "This project is an audio‑reactive visualizer built with p5.js and the p5.sound library. I analyzed input audio by extracting \
            amplitude and FFT frequency data, then mapped those values to a radial waveform and layered planet graphics. The system uses real‑time audio sampling,\
             trigonometric positioning, and custom pixel‑art assets to generate a dynamic scene that evolves with the music. The result is a compact demonstration of\
              audio analysis, procedural animation, and interactive graphics programming.",
            "skills": ["p5js","JavaScript"],
            "demo": "https://openprocessing.org/sketch/2235668",
            "background": "rgb(164, 166, 255)"
        },
        ddw:{
            "title":"Digital Divide Website",
            "description": "Informative website to provide resources on the Digital Divide in Canada and educate on socio-economic gaps in digital literacy",
            "tools": ["HTML", "CSS", "JavaScript", "Bootstrap"],
            "demo": "https://chloe-lh.github.io/DigitalDivide/",
            "background": "rgba(152, 252, 159, 1)"
        },
        suduko:{
            "title":"Suduko Solver",
            "description":"I built a Sudoku solver using Constraint Satisfaction Problem (CSP) techniques, combining backtracking search, \
             constraint propagation (via the AC-3 algorithm), and variable selection heuristics like MRV and the degree heuristic. The puzzle \
             is modeled as a grid of variable domains that dynamically update to maintain consistency. I also visualized solver performance \
             using Matplotlib, comparing strategies based on nodes expanded. This project strengthened my understanding of AI problem-solving, CSPs, \
             and performance analysis in Python.",
            "tools": ["Python", "Matplotlib"],
            "demo": false,
            "background": "rgba(251, 144, 253, 1)"
        },
        psnotify:{
            "title":"Distpsnotify",
            "description":"distpsnotify is a distributed systems utility that enables remote command execution and process monitoring across\
             multiple hosts. Built in C, it implements a client-server architecture where a central coordinator uses SSH to distribute shell\
              commands to remote agents running on multiple machines, then aggregates and reports the results. The project demonstrates proficiency \
              in systems programming, including socket-based network communication, SSH integration, process management, and POSIX systems programming. \
              Key technical challenges include coordinating multi-host command execution, managing socket communication between distributed components,\
             and handling process parsing and data aggregation across heterogeneous systems.",
             "tools":["C", "SSH","POSIX","distributed processes"],
             "demo": "https://github.com/Chloe-lh/distpsnotify",
             "background":"rgba(0,0,0,0)"
        }
    }
    return(
        <section className="projects">
            {Object.entries(projects).map(([key, project])=> (
            <div className="project-card" key={key} style={{backgroundColor: "#FDFEFE"}}>
                <div className="title-demo-container">
                    <h2>{project.title}</h2>
                    {project.demo !== false && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">View</a>
                    )}
                </div>
                {(project.skills || project.tools) && (
                    <p className="skill" style={{fontWeight: 'bold'}}>Tools{" "}{(project.skills || project.tools).map((skill, index)=>(
                        <span key={index} className="skill-item">{skill}</span>
                    ))}</p>
                )}
                <p className="description">{project.description}</p>
            </div>
            ))}
        </section>
    )
}
