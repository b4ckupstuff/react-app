import React from 'react';

function Table(props) {
    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                {/*<div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group mr-2">
                        <button className="btn btn-sm btn-outline-secondary">Share</button>
                        <button className="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar"></span>
                        This week
                    </button
                </div>*/}
            </div>
            <div className="table-responsive" style={{"overflowX":"auto"}}>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                    <tr className="d-flex">
                        {
                            props.headers.map((value, index) => {
                                return <th className="col-sm-6 col-md-3" key={index}>{value}</th>
                            })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.data.map((value, index) => {
                            return <tr className="d-flex" key={index}>
                                    {
                                        props.data[index].map((innerValue, innerIndex) => {
                                            if(innerIndex === 0) {
                                                return <th scope="row" className="col-sm-6 col-md-3">
                                                    {innerValue}
                                                </th>
                                            } else {
                                                return <td className="col-sm-6 col-md-3">{innerValue}</td>
                                            }
                                        })
                                    }
                                </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Table;