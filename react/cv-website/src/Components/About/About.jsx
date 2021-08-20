import { Container } from "reactstrap";

const About = () => {
    document.title = "About"
    return (
        <Container>
            <div>
                <div className="App">
                    <header className="App-header">
                        <h1>This is the about page</h1>
                    </header>
                </div>
            </div>
        </Container>
    );
}

export default About;