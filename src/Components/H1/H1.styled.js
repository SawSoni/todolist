import styled from 'styled-components';

export const H1 = styled.h1`
        font-size : ${props => props.fontSize ? props.fontSize : '2em'};
        color: ${props => props.color ? props.color: 'grey'};

`