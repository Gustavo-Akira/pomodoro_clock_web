import React from 'react';
import { Container } from './styled';

const AppContainer = ({children})=>{
    return(
        <Container>
            {children}
        </Container>
    );
}

export default AppContainer;