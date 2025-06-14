export default function Projects(){
    const projects = {
        "project1": {
            "title": "Project One",
            "description": "This is the first project.",
            "Skills": ["JavaScript", "React", "CSS"],
            "demo": "https://example.com/project1"
            
        },
        "project2": {
            "title": "Project Two",
            "description": "This is the second project.",
            "Skills": ["JavaScript", "React", "CSS"],
            "demo": "https://example.com/project2"
        },
    }
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Here are some of my projects. Click on the links to view the demos.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}
