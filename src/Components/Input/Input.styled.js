import styled from 'styled-components';
import {  Field } from 'formik';

export const StyleInput = styled(Field)`
    display: block;
    padding: 5px;
    margin: 5px 20px;
    border: ${props => props.border || '1px solid #CCC'};
    background-color: #FFF;
    /* border-bottom: 1px solid black; */
`;