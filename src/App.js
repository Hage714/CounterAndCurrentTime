import CurrentTime from "./components/CurrentTime";
import { useState } from "react";
import Counter from "./components/Counter";
import DisplayStudents from "./components/DisplayStudents";
import students from "./data/students";
import EmployeesData from "./components/EmployeesData";
import employees from "./data/employees";
import ShoppingStyledList from "./components/ShoppingStyledList";
import items from "./data/shoppinglist";
import StudentsForm from "./components/StudentsForm";


//import './test.css';


function App() {
  const [count, setCount] = useState(0);
  /*defining state variables
  const [name, setName] = useState(null);
  const [groceries, setGroceries] = useState([]);
  const [student, setStudent] = useState([]);
  const [isActive, setIsActive] = useState(false);
  */


  const increaseCountButton = () => {
    setCount(count + 2);
    console.log("Button Clicked!!");
  };

  const decreaseCountButton = () => {
    setCount(count - 3);
  };
  return (
    <div className="App">
      {/* 
      <CurrentTime />
      <Counter
        increaseCountButton={increaseCountButton}
        decreaseCountButton={decreaseCountButton}
        count={count}
      />

      <DisplayStudents students={students} />
<EmployeesData  employees = {employees} />
<ShoppingStyledList items = {items} />
*/}

<StudentsForm />

    </div>
  );
}

export default App;
