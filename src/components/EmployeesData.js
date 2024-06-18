import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const EmployeesData = ({employees}) => {
  console.log(employees)
  return (
    <div>
      <h3>Employees Data</h3>
      <hr />
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Identity</th>
          <th>Gender</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </thead>
        <tbody>
       {employees.map((employee) => {
        return <tr key={employee.id}>
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td>{employee.identity}</td>
          <td>{employee.gender}</td>
          <td>{employee.phoneNumber}</td>
          <td>{employee.email}</td>
          <td>{employee.role}</td>
          <td><FaEdit /></td>
          <td><MdDelete /></td>
        </tr>
 } )}
          
        </tbody>
      </table>
    </div>
  )
};

export default EmployeesData;
