import { Container } from "reactstrap";

const Home = () => {
    document.title = "Home"
    return (
        <Container>
            <div>
                <div className="App">
                    <header className="App-header">
                        <h1>This will be my website</h1>
                        <p id="color1">Colour 1</p>
                        <p id="color2">Colour 2</p>
                        <p id="color3">Colour 3</p>
                        <p id="color4">Colour 4</p>
                        <p id="color5">Colour 5</p>
                    </header>
                </div>
            </div>
        </Container>
    );
}

export default Home;