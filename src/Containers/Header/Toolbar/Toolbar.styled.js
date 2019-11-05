import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    position: relative;
    background-color: #CCC; 
    top: 5%;
    left:0;
    height:65px;

    @media(max-width: 768px){
        margin-top:10px;
    }
`

export const Nav = styled.nav`
    display: flex;
    height:100%;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1rem;

    button {
        background-color: green;
        padding: 5px 15px;
        margin: 10px;
        border-radius: 2px;
        color:white; 
    }
`
export const UlParent = styled.div`
    margin-left: 1rem;
    @media(max-width: 768px){
        display: none;
    }
`
export const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
`
export const Li = styled.li`
    padding: 0 0.5rem;

    &:hover{
        color: green;
    }

    &:active{
        color: green;
    }
`

export const ToggleBar = styled.div`
   @media(min-width: 769px){
        display: none;
} 
`
