import React from 'react';
import { Container } from './styled';
import Setting from '../Setting';

const Settings = ({time, setTime, breakTime, setBreakTime})=>{
    return(
        <Container>
            <Setting title="Session Time" value={time} setValue={setTime}/>
            <Setting title="Break Time" value={breakTime} setValue={setBreakTime}/>
        </Container>
    );
}

export default Settings;