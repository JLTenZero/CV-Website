import { Container } from "reactstrap";
// import axios from "axios";
// import { useEffect, useState } from "react";
import Grid from "./Display/Grid";

const WF = () => {
    document.title = "WF"
    let wfdata = require('./WFData.json');
    console.log(wfdata);

    wfdata.sort((a, b) => (a.item_name > b.item_name) ? 1 : -1);

    return (
        <Container>
            <div>
                <header>
                    <h1>{document.title} Page</h1>
                </header>
            </div>
            <div id="dropped-box" className="container-fluid" align="center">
                <Grid wfdata={wfdata} />
            </div>
        </Container>
    );
}

export default WF;