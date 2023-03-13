import styled from "styled-components";

export const Container = styled.div`   
    cursor: pointer;
    background:hsl(209, 23%, 22%);        
    
   
        img{
            width: 320px;
            height: 200px;            
        }        
   
    .infoCountry{
        
        display: flex;
        flex-direction: column;
        gap: 10px;        
        padding: 20px;
        color: #fff;
        h2,p{
            max-width: 280px;
            
        }
        h2{
            font-size: 20px;
            
        }
        p{
            font-size: 16px;
        }
    }
`