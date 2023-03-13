import styled from "styled-components";

export const Container = styled.div`
    width: 220px;
    height: 300px;
    display: flex;   
    flex-direction: column;
    background:hsl(209, 23%, 22%);
    
    figure{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 100%;
            height: 150px;
        }
    }
    .infoCountry{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 10px;
        padding-left: 20px;
    }
`