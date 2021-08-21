import { Container } from "reactstrap";

const About = () => {
    document.title = "About"

    return (
        <Container>
            <div>
                <header>
                    <h1>{document.title} Page</h1>
                </header>
            </div>
        </Container>
    );
}

export default About;