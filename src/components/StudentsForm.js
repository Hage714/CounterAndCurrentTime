import React, { useState } from "react";

const StudentsForm = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [course, setCourse] = useState(null);
    const [isActive, setIsActive] = useState(true);
    const [gender, setGender] = useState(null);

    const students = JSON.parse(localStorage.getItem("students") || "[]");




    //listening for a submit event on the form
    const handleSubmit = (e) => {
        //the function takes in one parameter,e,event
        e.preventDefault();

        //creating the student object
        const studentObject = {
            first_name: firstName,
            last_name: lastName,
            course: course,
            is_active: isActive,
            gender: gender,
        };

        //students.push(studentObject);

        const existingStudents = JSON.parse(localStorage.getItem("students") || "[]");
        localStorage.setItem("students", JSON.stringify([...existingStudents, studentObject]));

        //console.log(studentObject);
        console.log("Form submitted!");
        window.location.reload();

    };
    console.log(students);

    return (
        <div className="row m-4">

            <div className="col-4">
                <h4>New Student</h4>
                <hr></hr>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" onChange={(e) => setLastName(e.target.value)}
                        />

                    </div>

                    <div className="mb-3">
                        <label className="form-label">Course Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setCourse(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select
                            className="form-select"
                            onChange={(e) => setGender(e.target.value)}>
                            <option value="">select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Is Student Active</label>
                        <select
                            className="form-select"
                            onChange={(e) => setIsActive(e.target.value)}
                        >
                            <option value="">select</option>

                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                            Submit Data
                        </button>
                    </div>
                </form>
            </div>
            <div className="col-8">
                <table className="table table-sm table-responsive">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Gender</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        {students.map((student, index) => {  //mapping data to the table

                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{student.first_name} {student.last_name}</td>
                                <td>{student.course}</td>
                                <td>{student.gender}</td>
                                <td>{student.is_active}</td>
                            </tr>
})}
</tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentsForm;
