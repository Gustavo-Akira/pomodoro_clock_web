import React, { useState, useEffect } from 'react';
import { Box, Timer } from './styled';

const Clock = ({time, breakTime})=>{
    const [realTime , setRealTime] = useState(0);
    useEffect(()=>{
        setRealTime(time.toFixed(2));
    },[time]);
    return(
        <Box>
            <h1>Session</h1>
            <Timer>{realTime.toLocaleString().replace(".",":")}</Timer>
        </Box>
    );
}

export default Clock;