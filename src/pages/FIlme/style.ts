import styled from "styled-components";

export const ContainerSite = styled.div`
    max-width:800px;
    display:flex;
    flex-direction:column ;
    padding:0 8px;
    margin-top: 18px;
    h1{
        margin:14px 0;
    }
    img{
        border-radius:8px;
        width:800px;
        max-width:100%;
        max-height:340px;
        object-fit:cover;
    }
    h3{
        margin-top:14px;
    }
    span{
        margin: 8px 0;
    }
    button{
        margin-right:12px;
        margin-top:14px;
        margin-left:0;
        font-size:20px;
        border: 0;
        outline:none;
        padding:12px;
        border-radius:4px;
        cursor:pointer;
    }
    button:hover{
        background-color:brown;
        color:#fff
    }
    a{
        text-decoration:none ;
        color:#000;
        transition:all 0.5s;
    }
    a:hover{
        text-decoration:none ;
    }
`