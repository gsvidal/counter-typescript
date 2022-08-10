import './App.css';
import React, { useState } from 'react';
import { Counter } from './components/Counter';
import { Input } from './components/Input';

function App() {
  const [counter, setCounter] = useState<number>(0);
  const [inputValue, setInputValue] = useState<number>(0);

  const addHandler = () => {
    setCounter((counter) => {
      return (counter += inputValue);
    });
  };

  const substractHandler = () => {
    setCounter((counter) => {
      return (counter -= inputValue);
    });
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(+event.currentTarget.value);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <Input onChangeEvent={changeHandler} />
      <Counter
        counter={counter}
        onAdd={addHandler}
        onSubstract={substractHandler}
        inputValue={inputValue}
      />
    </div>
  );
}

export default App;
