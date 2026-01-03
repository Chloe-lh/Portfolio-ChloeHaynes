import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./styles.css";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const CustomRightArrow = ({ onClick }) => {
    console.log("Rendering right arrow");
    return (
        <button className="custom-arrow right-arrow" onClick={onClick}>
        ›
        </button>
    );
    };
    const CustomLeftArrow = ({ onClick }) => {
        console.log("Rendering left arrow");
        return (
            <button className="custom-arrow left-arrow" onClick={onClick}>
            ‹
            </button>
        );
    };
    return(
        <section className="skills">
            <Container fluid>
                <Row>
                    <Col>
                    <div className="skills-bx">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} 
                        autoPlaySpeed={3000} keyBoardControl={true} customTransition="all .25" 
                        transitionDuration={500} customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />}>
                        <div className="skill-card">
                            <i className="devicon-javascript-plain skill-icon"></i>
                            <h4>JavaScript</h4>
                        </div>12
                        <div className="skill-card">
                            <i className="devicon-python-plain skill-icon"></i>
                            <h4>Python</h4>
                        </div>
                        <div className="skill-card">
                            <i className="devicon-react-original skill-icon"></i>
                            <h4>React</h4>
                        </div>
                        <div className="skill-card">
                            <i className="devicon-java-plain skill-icon"></i>
                            <h4>Java</h4>
                        </div>
                        <div className="skill-card">
                            <i className="devicon-android-plain skill-icon"></i>
                            <h4>Android</h4>
                        </div>
                        <div className="skill-card">
                            <i className="devicon-firebase-plain skill-icon"></i>
                            <h4>Firebase</h4>
                        </div>
                        <div className="skill-card">
                            <i className="devicon-sqlite-plain skill-icon"></i>
                            <h4>SQLite</h4>
                        </div>
                        <div className="skill-card">
                            <i className="devicon-git-plain skill-icon"></i>
                            <h4>Git</h4>
                        </div>
                        <div className="skill-card">
                            <i className="devicon-c-plain skill-icon"></i>
                            <h4>C</h4>
                        </div>
                        <div className="skill-card">
                            <i className="devicon-r-plain skill-icon"></i>
                            <h4>RStudio</h4>
                        </div>
                        <div className="skill-card">
                            <i className="devicon-mongodb-plain skill-icon"></i>
                            <h4>MongoDB</h4>
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

