import styled from 'styled-components';
import {  Field } from 'formik';

export const StyleInput = styled(Field)`
    display: block;
    padding: 5px;
    margin: 5px 20px;
    /* border: ${props => props.border || '1px solid #CCC'}; */
    background-color: #FFF;
    /* border-bottom: 1px solid black; */
`;

export const Form = styled.form`
    width: 100%;
`;

export const Button = styled.button`
  width: 300px;
  display: block;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;

// Text

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;


export const Title2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`;

export const Label = styled.label`
  display: flex;
  /* flex-direction: column; */
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
  width: 100%;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}

`;

