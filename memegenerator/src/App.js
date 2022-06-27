import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import MemeComponent from './components/MemeComponent';
import Things from './components/Things';
import Counter from './components/Counter';
import MemeComp from './components/MemeComp';
import Star from './components/StarWars';
import WindowTracker from './components/WindowTracker';

function App() {
  const [show, setShow] = useState(true)

  function handleClick() {
    setShow(prevShow => !prevShow)
  }

  return (
    <div>
      <Header/>
      {/* <MemeComponent/> */}

      {/* <Things />
      <Counter /> */}
      {/* <MemeComponent/> */}
      {/* <MemeComp/> */}
      {/* <Star /> */}
      <button onClick={handleClick}>
        {show ? "Hide" : "Toggle"} WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
