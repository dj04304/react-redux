import React, { useState } from 'react';
import './App.css';
import Top from './components/Top';
import Bottom from './components/Bottom';

function App() {
  //state
  const [number, setNumber] = useState(1);

  //setNumber를 넘기지 말고 함수를 만들어 역할을 정해주고 그 역할만 가지게끔 한 후 넘겨줘라
  const addNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div className="container">
      <h1>최상단 화면</h1>
      <Top number={number} />
      <Bottom addNumber={addNumber} />
    </div>
  );
}

export default App;
