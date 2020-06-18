import React, {useState, useEffect} from 'react';

function AdminFormContainer() {

    const [spinnerLoadingState, changeSpinnerLoadingState] = useState(false);
    const [hierarchyOne, changeHierarchyOne] = useState(undefined);
    const [hierarchyTwo, changeHierarchyTwo] = useState(undefined);
    const [hierarchyThree, changeHierarchyThree] = useState(undefined);
    const [hierarchyFour, changeHierarchyFour] = useState(undefined);
    const [hierarchyOneSelectedValue, changeHierarchyOneSelectedValue] = useState(undefined);
    const [hierarchyTwoSelectedValue, changeHierarchyTwoSelectedValue] = useState(undefined);
    const [hierarchyThreeSelectedValue, changeHierarchyThreeSelectedValue] = useState(undefined);

    const fetchLevelOneData = () => {
        fetch('http://localhost:3001/levelUno')
            .then(res => res.json())
            .then(data => {
                changeHierarchyOne(data);
                // changeHierarchyOneSelectedValue(data[0]);
                // handleOnHierarchyOneSelected({target: { value: data[0] }})
            })
            .catch(err => console.log(err));
    };

    const fetchLevelTwoData = (parent) => {
        fetch(`http://localhost:3001/levelDuos/${parent}`)
            .then(res => res.json())
            .then(data => {
                changeHierarchyTwo(data);
                // changeHierarchyTwoSelectedValue(data[0]);
                // handleOnHierarchyTwoSelected({target: { value: data[0] }})
            })
            .catch(err => console.log(err));
    };

    const fetchLevelThreeData = (grandparent, parent) => {
        fetch(`http://localhost:3001/levelTres/${grandparent}/${parent}`)
            .then(res => res.json())
            .then(data => {
                changeHierarchyThree(data);
                // changeHierarchyThreeSelectedValue(data[0]);
                // handleOnHierarchyThreeSelected({target: { value: data[0] }})
            })
            .catch(err => console.log(err));
    };

    const fetchLevelFourData = (greatGrandParent, grandparent, parent) => {
        fetch(`http://localhost:3001/levelQuatro/${greatGrandParent}/${grandparent}/${parent}`)
            .then(res => res.json())
            .then(data => {
                changeHierarchyFour(data);
            })
            .catch(err => console.log(err));
    };

    const handleOnHierarchyOneSelected = (evt) => {
        changeHierarchyOneSelectedValue(evt.target.value);
        changeHierarchyTwo(undefined);
        changeHierarchyThree(undefined);
        changeHierarchyFour(undefined);
        fetchLevelTwoData(evt.target.value);
    };

    const handleOnHierarchyTwoSelected = (evt) => {
        changeHierarchyTwoSelectedValue(evt.target.value);
        changeHierarchyThree(undefined);
        changeHierarchyFour(undefined);
        fetchLevelThreeData(hierarchyOneSelectedValue, evt.target.value);
    };

    const handleOnHierarchyThreeSelected = (evt) => {
        changeHierarchyThreeSelectedValue(evt.target.value);
        changeHierarchyFour(undefined);
        fetchLevelFourData(hierarchyOneSelectedValue, hierarchyTwoSelectedValue, evt.target.value)
    };

    const handleOnClick = () => {

    };

    useEffect(() => {
        if(!hierarchyOne)
            fetchLevelOneData();
    }, [hierarchyOne]);

    return (
        <div className="App">
            <form className="form-signin" action="#">

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

                {
                    hierarchyThree &&
                    <div className="form-group">
                        {/*<label htmlFor="formSelectTres">Field Uno</label>*/}
                        <select className="form-control form-control-lg" id="formSelectTres" onChange={handleOnHierarchyThreeSelected}>
                            <option key="100" value="">Select</option>
                            {
                                hierarchyThree.map((value, index) => {
                                    return <option key={index} value={value}>{value}</option>
                                })
                            }
                        </select>
                    </div>
                }

                {
                    hierarchyFour && !hierarchyFour.length &&
                        <div className="form-label-group">
                            <input type="text" id="inputEmail" className="form-control" placeholder="Value" required />
                            <label htmlFor="inputEmail">Value</label>
                        </div>
                }

                {
                    hierarchyFour && hierarchyFour.length &&
                    <div>
                        <div className="form-group">
                            {/*<label htmlFor="formSelectTres">Field Uno</label>*/}
                            <select className="form-control form-control-lg" id="formSelectQuatro">
                                <option key="100" value="">Select</option>
                                {
                                    hierarchyFour.map((value, index) => {
                                        return <option key={index} value={value}>{value}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-label-group">
                            <input type="text" id="inputEmail" className="form-control" placeholder="Value" required />
                            <label htmlFor="inputEmail">Value</label>
                        </div>
                    </div>
                }

                {
                    !(spinnerLoadingState) ?
                        <button className="btn btn-lg btn-info btn-block" type="status" onClick={handleOnClick}>
                            Submit
                        </button>
                        :
                        <button className="btn btn-lg btn-info btn-block" type="status" onClick={handleOnClick} disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                        </button>
                }
            </form>
        </div>
    );
}

export  default AdminFormContainer;