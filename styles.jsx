import { Input, Button } from 'antd';
import styled from 'styled-components';

export const P = styled.p`
    text-align: center;
`;

export const A = styled.a`
    margin-top: 75px;
    font-size: 70px;
    font-weight: 650;
    color: #40a9ff;
    text-decoration: none;
`;

export const StyledInput = styled(Input)`
    width: 85%;
`;

export const StyledButton = styled(Button)`
    display: flex;
    font-size: 1.2em;
`;

export const StyledSubmitButton = styled(Button)`
    display: flex;
    background-color: #40a9ff;
    color: white;
    padding-left: 0.4em;
    width: 15%;
    justify-content: flex-start;
    font-size: 0.9em;
`;

export const Form = styled.form`
    display: flex;
    width: 12em;
`;

export const Div = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Do+Hyeon&display=swap');
    font-family: 'Do Hyeon', sans-serif;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 1.8em;
    align-items: center;
    justify-content: center;
`;

export const ToDoListDiv = styled.div`
    margin-left: 0.5em;
    display: inline-flex;
    width: 17em;
    margin-top: 0.3em;
    font-weight: bold;
    font-size: 0.7em;
    justify-content: space-between;
`;

export const ToDoBack = styled.div`
    border-top-left-radius: 0.7em;
    border-top-right-radius: 0.7em;
    margin-top: 0.7em;
    width: 12.4em;
    height: 21em;
    background-color: white;
    overflow: auto;
`;

export const StyledFont = styled.span`
    text-decoration: line-through;
`;