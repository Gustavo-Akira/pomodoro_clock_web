import React from 'react';
import { ButtonsBox, Button } from './styled';
const Buttons = ({start,breaking})=>{
    return(
        <ButtonsBox>
            <Button onClick={start}>start</Button>
            <Button onClick={breaking}>stop</Button>
            <Button>reset</Button>
        </ButtonsBox>
    );
}

export default Buttons;