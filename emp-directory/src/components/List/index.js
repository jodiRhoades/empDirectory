import React from "react";
import employees from '../../employees.json';


function List(props) {
  console.log(props.employees)
 // const notMale = props.employees.filter(employee => !employee.male);
console.log(props, '<=====================================')
  return (
    <ul className="list-group">
      {props.employees.map(item => (
        <li className="list-group-item" key={item.id.value}>
          {item.name.first}
        </li>
      ))}
    </ul>
  );
}

export default List;