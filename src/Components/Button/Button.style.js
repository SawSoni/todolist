import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
    font-size: 1em;
    padding: 7px 12px;
    margin: 5px;
    border: none;
    border-radius: 2px;
    color: #FFF;
    cursor: pointer;
    &:focus {
        outline: 0px;
         cursor: pointer;
    };
    
    ${(props) => props.buttonText &&
    css`
        background: ${(props.color)}
        width: ${(props.width)}
    `
    };


`