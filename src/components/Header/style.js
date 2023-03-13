import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    background:hsl(209, 23%, 22%);

    h1{
        color: #FFF;
        font-size: 25px;
        line-height: 22px;
    }
    
    button{
        
        display: flex;
        gap: 10px;
        align-items: center;
        background:  transparent;
        border: none;
        color: #FFF;
        font-size: 17px;
        line-height: 22px;
    }
`