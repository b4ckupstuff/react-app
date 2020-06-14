import React from 'react';
import {Link} from "react-router-dom";

function Breadcrumb(props) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb resetBackgroundColor">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active breadcrumbContent" aria-current="page">Your name here</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb;