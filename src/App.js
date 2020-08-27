import React, { useState, useEffect } from 'react';
import Title from './components/Title/';
import Settings from './components/Settings/';
import Clock from './components/Clock/';
import Buttons from './components/Buttons/';
import AppContainer from './components/AppContainer';



function App() {
  
  const handleStart = ()=>{
    console.log(!roll);
    setRoll(!roll);  
  }
  const [roll, setRoll] = useState(false);
  const [time, setTime] = useState(25);
  const [breakTime,setBreakTime] = useState(5);
  useEffect(()=>{
    console.log(time);
    let timer;
    if(roll){
      timer = setTimeout(()=>{
        setTime(time - 1);
      },1000);
    }
    if(time <= 0){
      clearTimeout(timer);
    }
  },[roll, time])
  return (
    <AppContainer>
      <Title />
      <Settings time={time} setTime={setTime} breakTime={breakTime} setBreakTime={setBreakTime}/>
      <Clock time={time} breakTime={breakTime}/>
      <Buttons start = {handleStart}/>
    </AppContainer>
  );
}

export default App;
