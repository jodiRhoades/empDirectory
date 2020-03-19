import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
// import EmployeeList from '../../employees.json';

function EmployeeTable(props) {
    console.log(props)
    const [employeeList, setEmployeeList] = useState([])    
    const [sortDirection, setSortDirection] = useState('asc')
    const handleChange = e => {
        setSortDirection(sortDirection === 'asc' ? 'dsc' : 'asc');
    };
    useEffect(() => {
        console.log(employeeList)
        const results = props.employees.sort((a, b) => {

            
                var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
                console.log(nameA)
                if (sortDirection === 'asc'){
                if (nameA < nameB) {
                    
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
            } else {
                if (nameA > nameB) {
                    
                    return -1;
                  }
                  if (nameA < nameB) {
                    return 1;
                  }
            }              
                // names must be equal
                return 0;    
        });
        setEmployeeList(results);
        console.log (results)
    }, [setEmployeeList, employeeList, sortDirection]);

    const tableBody = () => {

        return employeeList.map((employee, i) => {
            console.log(employee)
            return(
            <tr>
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
