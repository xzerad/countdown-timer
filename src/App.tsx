import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Background } from './components/Background';
import { Counter } from './components/Counter';

function App() {
  return (
    <Background> 
      <Counter seconds={15}  minutes={60} hours={5} days={30} />
    </Background>
  );
}

export default App;
