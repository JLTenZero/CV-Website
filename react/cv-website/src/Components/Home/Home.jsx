import { Container } from "reactstrap";

const Home = () => {
    document.title = "Home"
    return (
        <Container>
            <div>
                <div>
                    <header>
                        <h1>{document.title} Page</h1>
                    </header>
                    <h2>The colour palette for the website:</h2>
                    <div align="center">
                        <h2>Primary</h2>
                        <p id="color1">Colour 1</p>
                        <h2>Secondary</h2>
                        <p id="color2">Colour 2</p>
                        <h2>Tertiary</h2>
                        <p id="color3">Colour 3</p>
                        <h2>Accents</h2>
                        <p id="color4">Colour 4</p>
                        <h2>???</h2>
                        <p id="color5">Colour 5</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Home;