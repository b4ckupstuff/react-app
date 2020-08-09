import React from 'react';

function ResultCards(props) {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col mb-4">
                    <div className="card border-dark mb-3">
                        <div className="card-header">Core Details</div>
                        <div className="card-body text-dark">
                            {/*<p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>*/}
                            <table className="table table-borderless table-hover">
                                <thead>
                                    <tr>
                                        <th />
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Date of Birth</th>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Life Path</th>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Expression</th>
                                        <td>11/2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Soul Urge</th>
                                        <td>6</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card border-dark mb-3">
                        <div className="card-header">Challenge</div>
                        <div className="card-body text-dark">
                            {/*<p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>*/}
                            <table className="table table-borderless table-hover">
                                <thead>
                                <tr>
                                    <th />
                                    <th>Details</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">Ist Challenge</th>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <th scope="row">IInd Challenge</th>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <th scope="row">IIIrd Challenge</th>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <th scope="row">IVth Challenge</th>
                                    <td>5</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card border-dark mb-3">
                        <div className="card-header">Important Details</div>
                        <div className="card-body text-dark">
                            {/*<p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>*/}
                            <table className="table table-borderless table-hover">
                                <thead>
                                    <tr>
                                        <th />
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Personality Number</th>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Maturity Number</th>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Growth Number</th>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Effectiveness</th>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Karmic Lesson</th>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">First Letter</th>
                                        <td>2 (B)</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">First Vowel</th>
                                        <td>5 (E)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card border-dark mb-3">
                        <div className="card-header">Intensity Details</div>
                        <div className="card-body text-dark">
                            {/*<p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>*/}
                            <table className="table table-borderless table-hover">
                                <thead>
                                    <tr>
                                        <th />
                                        <th>Number of Times</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </th>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultCards;