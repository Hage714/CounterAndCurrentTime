
import CurrentTime from "./components/CurrentTime";
import { useState } from "react";
import Counter from "./components/Counter";
import DisplayStudents from "./components/DisplayStudents";
import students from "./data/students";
import './test.css';


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
      <CurrentTime />
      <Counter
        increaseCountButton={increaseCountButton}
        decreaseCountButton={decreaseCountButton}
        count={count}
      />

      <DisplayStudents students={students} />


    </div>
  );
}

export default App;
