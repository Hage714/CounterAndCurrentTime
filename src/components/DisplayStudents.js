import React from "react";

const DisplayStudents = ({ students }) => {
  return (
    <div>
      <h3>Students list</h3>
      <hr />
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Course</th>
          <th>Gender</th>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.gender}</td>
            </tr>
          ))}

          
        </tbody>
      </table>
    </div>
  )
};

export default DisplayStudents;
