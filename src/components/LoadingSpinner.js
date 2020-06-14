import React from 'react';

function LoadingSpinner(props) {
    if(props.isLoading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return null;
}

export default LoadingSpinner;