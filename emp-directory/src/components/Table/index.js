import React from "react";
import { Table } from 'react-bootstrap';

function EmployeeTable(props) {
    console.log(props)
    // const [employeeList, setEmployeeList] = useState([])    

    const handleChange = e => {
        props.sort()
    };
    // useEffect(() => {
    //     sortTheList()
    // }, []);

    const tableBody = () => {

        return props.employees.map((employee, i) => {
            // console.log(employee)
            return(
            <tr key={employee.login.uuid}>
                <td>{i + 1}</td>
                <td>{employee.name.first}</td>
                <td><img alt={employee.name} src={employee.picture.thumbnail} className="img-container" /></td>
                <td>{employee.gender}</td>
                <td>{employee.location.city}</td>
            </tr>
            )
        })
    }
    return (
        <Table striped bordered hover size="sm" responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>
                        <button
                            onClick={ handleChange }>
                            Name
                            </button>
                    </th>
                    <th>Image</th>
                    <th>Gender</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {tableBody()}
            </tbody>
        </Table>
    )
}

export default EmployeeTable;
