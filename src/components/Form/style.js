import styled from "styled-components";

export const Container = styled.div`
    
    .search{
        display: flex;
        justify-content: space-between;
        padding: 0 30px;
        margin-top: 20px;
        input{
            width: 300px;
            height: 40px;
            border: none;
            padding-left: 10px;
            background-color: hsl(209, 23%, 22%) ;
            color: #fff;
            font-size: 17px;
        }
    }
`
export const ContainerCountry = styled.div`    
    
    display: flex;
    
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 50px;
`