import styled from 'styled-components';

export const ButtonsBox = styled.section`
    width:40%;
    display:flex;
    justify-content:space-around;
    margin-top:2rem;
`;

export const Button = styled.button`
    border:0;
    outline:0;
    padding:1.5rem;
    border-radius:1.5rem;
    background:#1E555C;
    border:5px solid #FFF;
    color: #FFF;
    &:hover{
        background:#FFF;
        color: #1E555C;
        cursor:pointer;
    }
`;