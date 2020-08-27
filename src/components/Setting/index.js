import React from 'react';
import { Config, Container, Button } from './styled';

const Setting = ({title,value, setValue})=>{
    const handleValue = (boolean)=>{
        if(boolean){
            setValue(value + 1);
        }else{
            if(value > 1){
                setValue(value - 1);
            }
        }
    };
    return(
        <Container>
            <h1>{title}</h1>
            <Config>
                <Button onClick={()=>handleValue(false)}>-</Button>
                <h3>{value}</h3>
                <Button onClick={()=>handleValue(true)}>+</Button>
            </Config>
        </Container>
    );
}

export default Setting;