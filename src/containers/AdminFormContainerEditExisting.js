import React, {useState, useEffect} from 'react';
import { withRouter } from "react-router";
import Breadcrumb from "../components/componentCss/Breadcrumb";
import DismissableAlert from "../components/DismissableAlert";
const apiEndpoint = process.env.REACT_APP_URL;

function AdminFormContainerEditExisting(props) {
console.log(props);
    const [spinnerLoadingState, changeSpinnerLoadingState] = useState(true);
    const [rootKey, changeRootKey] = useState(props.match.params.a);
    const [rootValue, changeRootValue] = useState(props.match.params.b);
    const [showAlert, changeShowAlert] = useState(false);
    const [alertCode, changeAlertCode] = useState("");
    const [alertMessage, changeAlertMessage] = useState("");
    const [data, changeData] = useState(undefined);

    function fetchData() {
        fetch(`${apiEndpoint}/adminData/${rootKey}/${rootValue}`)
            .then(res => res.json())
            .then(res => {
                console.log("here", res);
                changeData(res);
                changeSpinnerLoadingState(false);
            })
            .catch(err => {
                changeAlertCode("Error!");
                changeAlertMessage(err.message || "Something went wrong. Please try again later");
            });
    }

    useEffect(() => {
        if(!data)
            fetchData();
    }, [data]);

    return (
        <div className="App">
            <div className="container">
                <Breadcrumb levelOne="Admin" levelOneLink="admin" levelTwo="Edit data"/>

                { showAlert &&
                    <DismissableAlert
                        code={alertCode}
                        message={alertMessage}
                    />
                }

                <form action="javascript:void(0)">

                    {
                        rootKey && rootValue &&
                        <div className="form-group row">
                            <label htmlFor="input" className="col-sm-4 col-form-label">{rootKey}</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="input" defaultValue={rootValue} disabled/>
                            </div>
                        </div>
                    }

                    {
                        rootKey && !rootValue &&
                        <div className="form-group row">
                            <label htmlFor="input" className="col-sm-4 col-form-label">{rootKey}</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" id="input"/>
                            </div>
                        </div>
                    }

                    {
                        spinnerLoadingState && <div className="d-flex justify-content-center mt-5">
                            <div className="spinner-grow text-secondary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    }

                    {
                        data && Object.keys(data).map((value, index) => {
                            return <div className="form-group row" key={index}>
                                <label htmlFor="input" className="col-sm-4 col-form-label">{value}</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="input" defaultValue={data[value]}/>
                                </div>
                            </div>
                        })
                    }

                </form>

            </div>
        </div>
    )
}

export default (AdminFormContainerEditExisting);