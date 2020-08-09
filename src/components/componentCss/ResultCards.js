import React from 'react';

function ResultCards(props) {
    const data = props.content;
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
                                        {
                                            data.core.dateOfBirth.class ?
                                                <td className={data.core.dateOfBirth.class}>{data.core.dateOfBirth.value}</td> :
                                                <td>{data.core.dateOfBirth.value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">Life Path</th>
                                        {
                                            data.core.lifePath.class ?
                                                <td className={data.core.lifePath.class}>{data.core.lifePath.value}</td> :
                                                <td>{data.core.lifePath.value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">Expression</th>
                                        {
                                            data.core.expression.class ?
                                                <td className={data.core.expression.class}>{data.core.expression.value}</td> :
                                                <td>{data.core.expression.value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">Soul Urge</th>
                                        {
                                            data.core.soulUrge.class ?
                                                <td className={data.core.soulUrge.class}>{data.core.soulUrge.value}</td> :
                                                <td>{data.core.soulUrge.value}</td>
                                        }
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
                                    {
                                        data.challenge.first.class ?
                                            <td className={data.challenge.first.class}>{data.challenge.first.value}</td> :
                                            <td>{data.challenge.first.value}</td>
                                    }
                                </tr>
                                <tr>
                                    <th scope="row">IInd Challenge</th>
                                    {
                                        data.challenge.second.class ?
                                            <td className={data.challenge.second.class}>{data.challenge.second.value}</td> :
                                            <td>{data.challenge.second.value}</td>
                                    }
                                </tr>
                                <tr>
                                    <th scope="row">IIIrd Challenge</th>
                                    {
                                        data.challenge.third.class ?
                                            <td className={data.challenge.third.class}>{data.challenge.third.value}</td> :
                                            <td>{data.challenge.third.value}</td>
                                    }
                                </tr>
                                <tr>
                                    <th scope="row">IVth Challenge</th>
                                    {
                                        data.challenge.fourth.class ?
                                            <td className={data.challenge.fourth.class}>{data.challenge.fourth.value}</td> :
                                            <td>{data.challenge.fourth.value}</td>
                                    }
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
                                        {
                                            data.important.personality.class ?
                                                <td className={data.important.personality.class}>{data.important.personality.value}</td> :
                                                <td>{data.important.personality.value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">Maturity Number</th>
                                        {
                                            data.important.maturity.class ?
                                                <td className={data.important.maturity.class}>{data.important.maturity.value}</td> :
                                                <td>{data.important.maturity.value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">Growth Number</th>
                                        {
                                            data.important.growth.class ?
                                                <td className={data.important.growth.class}>{data.important.growrth.value}</td> :
                                                <td>{data.important.growth.value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">Effectiveness</th>
                                        {
                                            data.important.effectiveness.class ?
                                                <td className={data.important.effectiveness.class}>{data.important.effectiveness.value}</td> :
                                                <td>{data.important.effectiveness.value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">Karmic Lesson</th>
                                        {
                                            data.important.karmic.class ?
                                                <td className={data.important.karmic.class}>{data.important.karmic.value}</td> :
                                                <td>{data.important.karmic.value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">First Letter</th>
                                        {
                                            data.important.firstLetter.class ?
                                                <td className={data.important.firstLetter.class}>{data.important.firstLetter.value}</td> :
                                                <td>{data.important.firstLetter.value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">First Vowel</th>
                                        {
                                            data.important.firstVowel.class ?
                                                <td className={data.important.firstVowel.class}>{data.important.firstVowel.value}</td> :
                                                <td>{data.important.firstVowel.value}</td>
                                        }
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
                                        {
                                            data.intensity["1"].class ?
                                                <td className={data.intensity["1"].class}>{data.intensity["1"].value}</td> :
                                                <td>{data.intensity["1"].value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        {
                                            data.intensity["2"].class ?
                                                <td className={data.intensity["2"].class}>{data.intensity["2"].value}</td> :
                                                <td>{data.intensity["2"].value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        {
                                            data.intensity["3"].class ?
                                                <td className={data.intensity["3"].class}>{data.intensity["3"].value}</td> :
                                                <td>{data.intensity["3"].value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        {
                                            data.intensity["4"].class ?
                                                <td className={data.intensity["4"].class}>{data.intensity["4"].value}</td> :
                                                <td>{data.intensity["4"].value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        {
                                            data.intensity["5"].class ?
                                                <td className={data.intensity["5"].class}>{data.intensity["5"].value}</td> :
                                                <td>{data.intensity["5"].value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        {
                                            data.intensity["6"].class ?
                                                <td className={data.intensity["6"].class}>{data.intensity["6"].value}</td> :
                                                <td>{data.intensity["6"].value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        {
                                            data.intensity["7"].class ?
                                                <td className={data.intensity["7"].class}>{data.intensity["7"].value}</td> :
                                                <td>{data.intensity["7"].value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        {
                                            data.intensity["8"].class ?
                                                <td className={data.intensity["8"].class}>{data.intensity["8"].value}</td> :
                                                <td>{data.intensity["8"].value}</td>
                                        }
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        {
                                            data.intensity["9"].class ?
                                                <td className={data.intensity["9"].class}>{data.intensity["9"].value}</td> :
                                                <td>{data.intensity["9"].value}</td>
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col mb-4">
                    <div className="card border-dark mb-3">
                        <div className="card-header">Yearly Details</div>
                        <div className="card-body text-dark">
                            <table className="table table-bordered table-hover text-center">
                                <thead>
                                    <tr>
                                        <th>Age</th>
                                        <th colSpan="3">Transits</th>
                                        <th>Essence</th>
                                        <th>Personal Year</th>
                                        <th>Universal Year</th>
                                        <th>Year</th>
                                        <th>Period</th>
                                        <th>Pinnacle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0</td>
                                        <td>B</td>
                                        <td>S</td>
                                        <td>G</td>
                                        <td className="text-warning">11/2</td>
                                        <td>3</td>
                                        <td>3</td>
                                        <td>1974</td>
                                        <td>8</td>
                                        <td>9</td>
                                    </tr>
                                    <tr>
                                        <td>0</td>
                                        <td>B</td>
                                        <td>S</td>
                                        <td>G</td>
                                        <td>1</td>
                                        <td>3</td>
                                        <td>3</td>
                                        <td>1974</td>
                                        <td>8</td>
                                        <td>9</td>
                                    </tr>
                                    <tr>
                                        <td>0</td>
                                        <td>B</td>
                                        <td>S</td>
                                        <td>G</td>
                                        <td>1</td>
                                        <td>3</td>
                                        <td>3</td>
                                        <td>1974</td>
                                        <td>8</td>
                                        <td>9</td>
                                    </tr>
                                    <tr>
                                        <td>0</td>
                                        <td>B</td>
                                        <td>S</td>
                                        <td>G</td>
                                        <td className="text-danger">13/4</td>
                                        <td>3</td>
                                        <td>3</td>
                                        <td>1974</td>
                                        <td>8</td>
                                        <td>9</td>
                                    </tr>
                                    <tr>
                                        <td>0</td>
                                        <td>B</td>
                                        <td>S</td>
                                        <td>G</td>
                                        <td>1</td>
                                        <td>3</td>
                                        <td>3</td>
                                        <td>1974</td>
                                        <td>8</td>
                                        <td>9</td>
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