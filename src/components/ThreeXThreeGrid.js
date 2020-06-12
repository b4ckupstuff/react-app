import React from 'react';
import './componentCss/3x3Grid.css';
import {Link} from "react-router-dom";

function ThreeXThreeGrid() {
    return (
        <div className="App">
            <div className="container">

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb resetBackgroundColor">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active breadcrumbContent" aria-current="page">Your name here</li>
                    </ol>
                </nav>

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

                <div className="row mt-4">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-12 text-justify">
                                <samp>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare, ante et ultricies bibendum, eros lorem cursus elit, sed porta metus metus in augue. Pellentesque et erat odio. Donec placerat convallis augue sit amet tempor.
                                        Suspendisse finibus leo vitae dolor laoreet, ac mattis felis varius. Proin vestibulum, augue eget imperdiet aliquam, metus metus varius sem, iaculis fermentum nibh lectus porttitor velit. Aenean faucibus laoreet dictum.
                                        Nam ornare tempus nunc, vel dapibus orci pulvinar interdum. Curabitur pellentesque sagittis mattis. Donec mattis cursus felis ut volutpat. Nulla urna erat, bibendum eu orci eget, ornare cursus urna.
                                        Aenean pellentesque varius turpis, eu porttitor lorem. Cras feugiat enim nec quam vestibulum, eu venenatis erat gravida. Aliquam aliquam aliquet purus non varius. Ut pellentesque nisl id efficitur posuere.
                                        Donec nunc dui, bibendum quis cursus hendrerit, dictum nec quam.
                                    </p>
                                </samp>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ThreeXThreeGrid;