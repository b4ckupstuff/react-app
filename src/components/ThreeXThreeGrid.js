import React from 'react';
import './componentCss/3x3Grid.css';

function ThreeXThreeGrid() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">

                    <div className="col-9 mx-auto">
                        <div className="row">
                            <div className="col-4 calcHeight alert alert-primary border border-primary text-center zeroMargin">
                                <p className="">1</p>
                            </div>
                            <div className="col-4 calcHeight alert alert-secondary border border-primary text-center zeroMargin">2</div>
                            <div className="col-4 calcHeight alert alert-success border border-primary text-center zeroMargin">3</div>
                        </div>
                    </div>
                    <div className="col-9 mx-auto">
                        <div className="row">
                            <div className="col-4 calcHeight alert alert-warning border border-primary text-center zeroMargin">4</div>
                            <div className="col-4 calcHeight alert alert-success border border-primary text-center zeroMargin">5</div>
                            <div className="col-4 calcHeight alert alert-info border border-primary text-center zeroMargin">6</div>
                        </div>
                    </div>
                    <div className="col-9 mx-auto">
                        <div className="row">
                            <div className="col-4 calcHeight alert alert-secondary border border-primary text-center zeroMargin">7</div>
                            <div className="col-4 calcHeight alert alert-danger border border-primary text-center zeroMargin">8</div>
                            <div className="col-4 calcHeight alert alert-primary border border-primary text-center zeroMargin">9</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ThreeXThreeGrid;