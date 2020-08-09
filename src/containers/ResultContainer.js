import React from 'react';
import { useHistory } from "react-router-dom";
import Breadcrumb from "../components/componentCss/Breadcrumb";
import ThreeXThreeGrid from "../components/ThreeXThreeGrid";
import ResultCards from "../components/componentCss/ResultCards";

function ResultContainer(props) {
    const history = useHistory();
    console.log(history.location.state);
    return (
        <div className="App">
            <div className="container">

                <Breadcrumb
                    levelOne="Home"
                    levelTwo="Your Name Here"
                />

                <ResultCards />

                <ThreeXThreeGrid />

            </div>
        </div>
    )
}

export default ResultContainer;