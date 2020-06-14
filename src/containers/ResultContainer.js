import React from 'react';
import LoadingSpinner from "../components/LoadingSpinner";
import Breadcrumb from "../components/componentCss/Breadcrumb";
import ThreeXThreeGrid from "../components/ThreeXThreeGrid";

function ResultContainer(props) {
    return (
        <div className="App">
            <div className="container">

                <Breadcrumb/>

                <LoadingSpinner isLoading={props.isLoading}/>

                <ThreeXThreeGrid />

            </div>
        </div>
    )
}

export default ResultContainer;