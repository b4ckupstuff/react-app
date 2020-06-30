import React, {useState, useEffect} from 'react';
import AdminHomeTopAndSidebar from "../components/AdminHomeTopAndSidebar";
import Table from "../components/Table";

function AdminHome(props) {

    const [headers, changeHeaders] = useState([]);
    const [data, changeData] = useState([]);

    const fetchTableData = () => {
        fetch(`${process.env.URL}/adminData/number`)
        .then(res => res.json())
        .then(response => {
            changeHeaders(response.headers);
            changeData(response.data);
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        if(!data.length)
            fetchTableData();
    }, [data]);
    return (
        <div className="App">
            <AdminHomeTopAndSidebar />
            <Table
                headers={headers}
                data={data}
            />
        </div>
    )
}

export default AdminHome;