import React from 'react';

function DismissableAlert (props) {
    return (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{props.code}</strong> {`${props.message}`}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default DismissableAlert;