import React from "react";
import {Table} from 'react-bootstrap';
import EmployeeList from '../../employees.json';



function EmployeeTable(props) { 
    console.log(props)  
    const [employeeList, setEmployeeList]= useState([0])
    const [sortDirection, setSortDirection]= useState(['asc'])
    const handleChange = () => {
        {sortDirection}
        let nextSort;
        if (sortDirection === 'down') nextSort = 'up';
        else if (sortDirection === 'up') nextSort = 'default';
        else if (sortDirection === 'default') nextSort = 'down';
    }
    
    useEffect(() => {
    const results = EmployeeList.sort(employee => {
      console.log(employee)    
      return JSON.stringify(employee).toLowerCase()
      .includes(sortDirection)      
    });  
  
    
    setEmployeeList(results);
  }, [sortDirection]);
  console.log(employeeList)
 
    
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
                        onClick={{handleChange}}
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
