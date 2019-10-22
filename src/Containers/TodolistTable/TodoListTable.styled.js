import styled from 'styled-components';

export const HeaderRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    border-top: 1px solid #000;
    position: sticky;
    top: 73px;
    width: 100%;
    background-color:#CCC;
`
export const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
    border-top: 1px solid #000;
`
export const Col = styled.div`
    flex: 1 0 20%;
    padding: 10px;
    border-right: 1px solid #000;
`
export const FooterRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    position: sticky;
    bottom: 0;
    background-color: #CCC;
    justify-content: flex-end;
    padding: 10px;
    padding-right: 30px;
    color: #FFF;
`
export const RowContainer = styled.div`
    width: 100%;
    height: 150px;
    overflow: auto;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
`
