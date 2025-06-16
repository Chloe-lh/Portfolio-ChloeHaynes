import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./styles.css";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return(
        <section className="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skills-bx">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} keyBoardControl={true} customTransition="all .5" transitionDuration={500}>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                                <h5>Python</h5>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                                <h5>Java</h5>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android" />
                                <h5>AndroidStudio</h5>
                            </div>
                            <div>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
                                <h5>Firebase</h5>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite" />
                                <h5>SQLite</h5>
                            </div>
                            <div className="skill-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
     
    )
    
}
export default Skills;

