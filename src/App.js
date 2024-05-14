
import './App.css';
import CurrentTime from './components/CurrentTime';
import { useState } from 'react';
import Counter from './components/Counter';



function App() {
  const [count, setCount] = useState(0);

  const increaseCountButton = () => {
    setCount(count + 2)
    console.log("Button Clicked!!")
  }
  
  const decreaseCountButton = () => {
    setCount(count - 3)
  }
  return (
    <div className="App">
      <CurrentTime />
      <Counter increaseCountButton={increaseCountButton} decreaseCountButton={decreaseCountButton}  count={count} />

    </div>
  );
}

export default App;


