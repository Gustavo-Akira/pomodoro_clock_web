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
  const [time, setTime] = useState(25.00);
  const [timeClock, setTimeClock] = useState(time);
  const [breakTime,setBreakTime] = useState(5);
  useEffect(()=>{
    let timer;
    if(time <= 0 || !roll){
      clearTimeout(timer);
    }
    if(roll){
      timer = setTimeout(()=>{
        if(time === .00){
          setTime(time-0.41);
        }else{
          setTime(time - 0.1);
        }
      },1000);
    }
    
  },[roll, time]);
  useEffect(()=>{
    setTime(timeClock);
  },[timeClock]);
  const handleBreak = ()=>{
    setRoll(false);
  }
  return (
    <AppContainer>
      <Title />
      <Settings time={timeClock} setTime={setTimeClock} breakTime={breakTime} setBreakTime={setBreakTime}/>
      <Clock time={time} breakTime={breakTime}/>
      <Buttons start = {handleStart} breaking={handleBreak}/>
    </AppContainer>
  );
}

export default App;
