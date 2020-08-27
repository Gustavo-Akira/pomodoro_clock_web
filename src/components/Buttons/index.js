import React from 'react';
import { ButtonsBox, Button } from './styled';
const Buttons = ({start})=>{
    return(
        <ButtonsBox>
            <Button onClick={start}>start</Button>
            <Button>stop</Button>
            <Button>reset</Button>
        </ButtonsBox>
    );
}

export default Buttons;