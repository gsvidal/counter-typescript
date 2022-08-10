import './App.css';
import { useState } from 'react';
import { Counter } from './components/Counter';

function App() {
  const [counter, setCounter] = useState<number>(0);

  const addHandler = () => {
    setCounter((counter) => {
      return (counter += 1);
    });
  };

  const substractHandler = () => {
    setCounter((counter) => {
      return (counter -= 1);
    });
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <Counter
        counter={counter}
        onAdd={addHandler}
        onSubstract={substractHandler}
      />
    </div>
  );
}

export default App;
