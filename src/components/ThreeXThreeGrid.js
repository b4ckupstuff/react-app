import React from 'react';
import './componentCss/3x3Grid.css';

function ThreeXThreeGrid() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    
                    <div className="offset-2 col-3 calcHeight border border-primary text-center">1</div>
                    <div className="col-3 calcHeight border border-primary text-center">2</div>
                    <div className="col-3 calcHeight border border-primary text-center">3</div>

                    <div className="offset-2 col-3 calcHeight border border-primary text-center">4</div>
                    <div className="col-3 calcHeight border border-primary text-center">5</div>
                    <div className="col-3 calcHeight border border-primary text-center">6</div>

                    <div className="offset-2 col-3 calcHeight border border-primary text-center">7</div>
                    <div className="col-3 calcHeight border border-primary text-center">8</div>
                    <div className="col-3 calcHeight border border-primary text-center">9</div>

                </div>
            </div>
        </div>
    )
}

export default ThreeXThreeGrid;