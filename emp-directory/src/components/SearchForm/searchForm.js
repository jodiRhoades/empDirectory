import React, {useState, useEffect} from 'react';
import EmployeeTable from '../Table/index';
import EmployeeList from '../../employees.json';

 
  function SearchFilter(props) {
    const [searchTerm, setSearchTerm] = useState("");    
    const [employeeList, setEmployeeList]= useState([])
    const handleChange = e => {
      setSearchTerm(e.target.value);
    };
    useEffect(() => {
    const results = EmployeeList.filter(employee => {     
      return JSON.stringify(employee).toLowerCase()
      .includes(searchTerm)
    });    
    setEmployeeList(results);
    console.log(employeeList)
  }, [searchTerm]);
  
 
  return (
    <div>    
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={handleChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for an employee"
            id="search"
          />
          <br />
          {/* <button onClick={handleFormSubmit} className="btn btn-primary">
            Search
          </button> */}
        </div>
      </form>
    <EmployeeTable  employees={employeeList} /> 
    </div>
  );
  
}

export default SearchFilter;