import React, {useState, useEffect} from 'react';
import Breadcrumb from "../components/componentCss/Breadcrumb";
import DismissableAlert from "../components/DismissableAlert";
// const apiEndpoint = `http://localhost:3000/api`;
const apiEndpoint = `https://new.thyhealingcirclebbeenhu.com:3000/api`;

function AdminFormContainer() {

    const [spinnerLoadingState, changeSpinnerLoadingState] = useState(false);
    const [hierarchyOne, changeHierarchyOne] = useState(undefined);
    const [hierarchyTwo, changeHierarchyTwo] = useState(undefined);
    const [hierarchyThree, changeHierarchyThree] = useState(undefined);
    const [hierarchyFour, changeHierarchyFour] = useState(undefined);
    const [finalValue, changeFinalValue] = useState(undefined);
    const [hierarchyOneSelectedValue, changeHierarchyOneSelectedValue] = useState(undefined);
    const [hierarchyTwoSelectedValue, changeHierarchyTwoSelectedValue] = useState(undefined);
    const [hierarchyThreeSelectedValue, changeHierarchyThreeSelectedValue] = useState(undefined);
    const [hierarchyFourSelectedValue, changeHierarchyFourSelectedValue] = useState(undefined);
    const [showAlert, changeShowAlert] = useState(false);
    const [alertCode, changeAlertCode] = useState("");
    const [alertMessage, changeAlertMessage] = useState("");

    const fetchLevelOneData = () => {
        fetch(`${apiEndpoint}/levelUno`)
            .then(res => res.json())
            .then(data => {
                changeHierarchyOne(data);
                // changeHierarchyOneSelectedValue(data[0]);
                // handleOnHierarchyOneSelected({target: { value: data[0] }})
            })
            .catch(err => console.log(err));
    };

    const fetchLevelTwoData = (parent) => {
        fetch(`${apiEndpoint}/levelDuos/${parent}`)
            .then(res => res.json())
            .then(data => {
                changeHierarchyTwo(data);
                // changeHierarchyTwoSelectedValue(data[0]);
                // handleOnHierarchyTwoSelected({target: { value: data[0] }})
            })
            .catch(err => console.log(err));
    };

    const fetchLevelThreeData = (grandparent, parent) => {
        fetch(`${apiEndpoint}/levelTres/${grandparent}/${parent}`)
            .then(res => res.json())
            .then(data => {
                changeHierarchyThree(data);
                // changeHierarchyThreeSelectedValue(data[0]);
                // handleOnHierarchyThreeSelected({target: { value: data[0] }})
            })
            .catch(err => console.log(err));
    };

    const fetchLevelFourData = (greatGrandParent, grandparent, parent) => {
        fetch(`${apiEndpoint}/levelQuatro/${greatGrandParent}/${grandparent}/${parent}`)
            .then(res => res.json())
            .then(data => {
                changeHierarchyFour(data);
                if(!data.length) {
                    fetchFinalValue(greatGrandParent, grandparent, parent);
                }
            })
            .catch(err => console.log(err));
    };

    const fetchFinalValue = (one, two, three, four) => {
        fetch(`${apiEndpoint}/finalValue/${one}/${two}/${three}/${four}`)
                .then(res => res.json())
                .then(data => {
                    changeFinalValue(data);
                })
                .catch(err => console.log(err));
    };

    const handleOnHierarchyOneSelected = (evt) => {
        changeHierarchyOneSelectedValue(evt.target.value);
        changeHierarchyTwo(undefined);
        changeHierarchyThree(undefined);
        changeHierarchyFour(undefined);
        changeFinalValue(undefined);
        fetchLevelTwoData(evt.target.value);
    };

    const handleOnHierarchyTwoSelected = (evt) => {
        changeHierarchyTwoSelectedValue(evt.target.value);
        changeHierarchyThree(undefined);
        changeHierarchyFour(undefined);
        changeFinalValue(undefined);
        fetchLevelThreeData(hierarchyOneSelectedValue, evt.target.value);
    };

    const handleOnHierarchyThreeSelected = (evt) => {
        changeHierarchyThreeSelectedValue(evt.target.value);
        changeHierarchyFour(undefined);
        changeFinalValue(undefined);
        fetchLevelFourData(hierarchyOneSelectedValue, hierarchyTwoSelectedValue, evt.target.value)
    };

    const handleOnHierarchyFourSelected = (evt) => {
        changeFinalValue(undefined);
        changeHierarchyFourSelectedValue(evt.target.value);
        // console.log(hierarchyFourSelectedValue);
        fetchFinalValue(hierarchyOneSelectedValue, hierarchyTwoSelectedValue, hierarchyThreeSelectedValue, evt.target.value);
    };

    const handleOnClick = () => {
        changeSpinnerLoadingState(true);
        let one = document.getElementById("formSelectUno").value;
        let two = document.getElementById("formSelectDuos").value;
        let three = document.getElementById("formSelectTres").value;
        let four = document.getElementById("inputEmail").value;
        let five = (document.getElementById("formSelectQuatro") || {}).value;
        fetch(`${apiEndpoint}/value`,{
            "method": "post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            "body": JSON.stringify({
                one,
                two,
                three,
                four,
                five
            })
        })
            .then(res => res.json())
            .then(data => {
                changeSpinnerLoadingState(false);
                changeShowAlert(true);
                changeAlertCode("Success!");
                changeAlertMessage(`${five || three} was updated successfully for ${two}`)
            })
            .catch(err => console.log(err));
        // changeSpinnerLoadingState(false);
    };

    useEffect(() => {
        if(!hierarchyOne)
            fetchLevelOneData();
    }, [hierarchyOne]);

    return (
        <div className="App">
            <div className="container">
                <Breadcrumb
                    levelOne="Admin"
                    levelTwo="Edit Data"
                />
                { showAlert &&
                    <DismissableAlert
                        code={alertCode}
                        message={alertMessage}
                    />
                }
                <form className="" action="javascript.void(0)">

                {
                    hierarchyOne &&
                    <div className="form-group">
                        {/*<label htmlFor="formSelectUno">Field Uno</label>*/}
                        <select className="form-control form-control-lg" id="formSelectUno" onChange={handleOnHierarchyOneSelected}>
                            <option key="100" value="">Select</option>
                            {
                                hierarchyOne.map((value, index) => {
                                    return <option key={index} value={value}>{value}</option>
                                })
                            }
                        </select>
                    </div>
                }


                {
                    hierarchyTwo &&
                    <div className="form-group">
                        {/*<label htmlFor="formSelectDuos">Field Uno</label>*/}
                        <select className="form-control form-control-lg" id="formSelectDuos" onChange={handleOnHierarchyTwoSelected}>
                            <option key="100" value="">Select</option>
                            {
                                hierarchyTwo.map((value, index) => {
                                    return <option key={index} value={value}>{value}</option>
                                })
                            }
                        </select>
                    </div>
                }

                {/*{
                    hierarchyThree &&
                    <div className="form-group">
                        <label htmlFor="formSelectTres">Field Uno</label>
                        <select className="form-control form-control-lg" id="formSelectTres" onChange={handleOnHierarchyThreeSelected}>
                            <option key="100" value="">Select</option>
                            {
                                hierarchyThree.map((value, index) => {
                                    return <option key={index} value={value}>{value}</option>
                                })
                            }
                        </select>
                    </div>
                }*/}

                {
                    hierarchyThree &&
                    Object.keys(hierarchyThree).map((value, index) => {
                        return (typeof hierarchyThree[value] === "object") ?
                            /*Object.keys(hierarchyThree[value]).map((childValue, childIndex) => {
                                return <div className="form-label-group" key={childIndex}>
                                    <input type="text" id="input" className="form-control" placeholder={value + " -> " + childValue} defaultValue={hierarchyThree[value][childValue]} />
                                    <label htmlFor="input">{value} -> {childValue}</label>
                                </div>
                            })*/
                            <div key={index}/>
                            :
                            /*<div className="form-label-group" key={index}>
                                <input type="text" id="input" className="form-control" placeholder={value} defaultValue={hierarchyThree[value]} />
                                <label htmlFor="input">{value}</label>
                            </div>*/
                            <div className="form-group row" key={index}>
                                <label htmlFor="input" className="col-sm-4 col-form-label">{value}</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="input" defaultValue={hierarchyThree[value]}/>
                                </div>
                            </div>
                    })
                }

                {/*{
                    hierarchyFour && !hierarchyFour.length &&
                        <div className="form-label-group">
                            <input type="text" id="inputEmail" className="form-control" placeholder="Value" required />
                            <label htmlFor="inputEmail">Value</label>
                        </div>
                }*/}

                {
                    hierarchyFour && Array.isArray(hierarchyFour) && hierarchyFour.length ?
                        <div className="form-group">
                            {/*<label htmlFor="formSelectTres">Field Uno</label>*/}
                            <select className="form-control form-control-lg" id="formSelectQuatro" onChange={handleOnHierarchyFourSelected}>
                                <option key="100" value="">Select</option>
                                {
                                    (hierarchyFour).map((value, index) => {
                                        return <option key={index} value={value}>{value}</option>
                                    })
                                }
                            </select>
                        </div> :
                        <div />
                }


                {
                    finalValue &&
                    <div className="form-label-group">
                        <input type="text" id="inputEmail" className="form-control" placeholder="Value" defaultValue={finalValue} required />
                        <label htmlFor="inputEmail">Value</label>
                    </div>
                }

                {
                    !(spinnerLoadingState) ?
                        finalValue && <button className="btn btn-lg btn-info btn-block" type="status" onClick={handleOnClick}>
                            Submit
                        </button>
                        :
                        finalValue && <button className="btn btn-lg btn-info btn-block" type="status" onClick={handleOnClick} disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                        </button>
                }
            </form>
            </div>
        </div>
    );
}

export  default AdminFormContainer;