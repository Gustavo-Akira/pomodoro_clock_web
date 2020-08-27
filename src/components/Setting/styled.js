import styled from 'styled-components';

export const Config = styled.div`
    display:flex;
    justify-content:space-around;
`;

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    juftify-content:center;
    & h1{
        margin:0;
    }
`
export const Button = styled.button`
    background-color:transparent;
    border: 0;
    color:white;
    font-size:2rem;
    outline:0;
    &:hover{
        cursor:pointer;
    }
`