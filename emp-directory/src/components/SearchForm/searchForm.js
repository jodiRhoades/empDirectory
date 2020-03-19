import React, { useState, useEffect } from 'react';
import EmployeeTable from '../Table/index';
import EmployeeList from '../../employees.json';


function SearchFilter(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [mintEmployeeList, setMintEmployeeList] = useState([])
  const [employeeList, setEmployeeList] = useState([])
  const [sortDirection, setSortDirection] = useState('asc')
  const handleChange = e => {
    setSearchTerm(e.target.value);
    const newList = mintEmployeeList.filter(search => search.name.first.includes(e.target.value))
    console.log(newList)
    setEmployeeList(newList)
  };
  useEffect(() => {
    const results = EmployeeList.filter(employee => {
      return JSON.stringify(employee).toLowerCase()
      // .includes(searchTerm)
    });
    sortTheList(results)
    
  }, []);
  const newSort = () => {
    console.log('new Sort is starting')
    sortTheList(employeeList)
    
  }
  const sortTheList = (list) => {
    console.log('...sorting')
    const results = list.sort((a, b) => {


      var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
      console.log(nameA)
      if (sortDirection === 'asc') {
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
    console.log(results)
    setSortDirection(sortDirection === 'asc' ? 'dsc' : 'asc')
    setEmployeeList(results)
    if(!mintEmployeeList.length){
      console.log('creating mint')
      setMintEmployeeList(results)
    }
  }
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={handleChange}
            value={searchTerm}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for an employee (Start with a capital letter)"
            id="search"
          />
          <br />
        </div>
      </form>
      <EmployeeTable employees={employeeList} sort={newSort} />
    </div>
  );

}

export default SearchFilter;