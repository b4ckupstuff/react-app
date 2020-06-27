import React from 'react';
import {Link} from "react-router-dom";

function Breadcrumb(props) {
    // console.log(JSON.stringify(props));
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb resetBackgroundColor">
                <li className="breadcrumb-item"><Link to="/">{props.levelOne}</Link></li>
                <li className="breadcrumb-item active breadcrumbContent" aria-current="page">{props.levelTwo}</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb;