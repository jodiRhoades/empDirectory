import React from "react";
import {Table} from 'react-bootstrap';



function EmployeeTable(props) { 
    console.log(props)  
    //event handler for onclick  
    // asd or dec (states)
    //depedning on the state run another function useState sort
    const tableBody =()=>{
        const theList = props.employees.map((employee, i)=>(
        <tr>
            <td>{i+1}</td>
            <td>{employee.name.first}</td>
            <td><img alt={employee.name} src={employee.picture.thumbnail} className="img-container"/></td>
            <td>{employee.gender}</td>                    
            <td>{employee.location.city}</td>
        </tr>
        ))
        return theList
    }
    return (
        <Table striped bordered hover size="sm" responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>
                        <button
                        onClick={() => props.sortBy('name')}
                        >
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
