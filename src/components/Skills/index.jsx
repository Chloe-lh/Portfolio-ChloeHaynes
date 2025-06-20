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
            items: 6
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
                        <div className="skill-item">
                            <i className="devicon-javascript-plain skill-icon"></i>
                            <h5>JavaScript</h5>
                        </div>
                        <div className="skill-item">
                            <i className="devicon-python-plain skill-icon"></i>
                            <h5>Python</h5>
                        </div>
                        <div className="skill-item">
                            <i className="devicon-react-original skill-icon"></i>
                            <h5>React</h5>
                        </div>
                        <div className="skill-item">
                            <i className="devicon-java-plain skill-icon"></i>
                            <h5>Java</h5>
                        </div>
                        <div className="skill-item">
                            <i className="devicon-android-plain skill-icon"></i>
                            <h5>Android</h5>
                        </div>
                        <div className="skill-item">
                            <i className="devicon-firebase-plain skill-icon"></i>
                            <h5>Firebase</h5>
                        </div>
                        <div className="skill-item">
                            <i className="devicon-sqlite-plain skill-icon"></i>
                            <h5>SQLite</h5>
                        </div>
                        <div className="skill-item">
                            <i className="devicon-git-plain skill-icon"></i>
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

