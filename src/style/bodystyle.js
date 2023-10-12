import styled from "styled-components"

const _body =styled.div`
    flex: 4;
    display: flex;
    justify-content: center;
`
const _inbody=styled.div`
    height: 100%;
    width: 95%;

`
const _section1=styled.div`
    h1{
        padding: .1% 0%;
    }
    ul{
        margin-left: 3%;
        list-style: circle;
        padding: .5% 0%;
    }
    li{padding:.2% 0}
    border-bottom: 2px solid #e9e9e9;  
    @media (max-width:800px){
        h1{text-align:center;padding:2% 0%}
        ul{text-align:center;list-style:none;padding:1% 0%}
    }
    
`
const _section2=styled.div`
    border-bottom: 2px solid #e9e9e9;  
    ul{
        display: flex;
        /* border: 1px solid; */
        width: 30%;
        align-items: center;
        justify-content: space-between;
    } 
    .ul{
        width: auto;
        list-style: none;
        padding: 1.15% 0%;
    }
    .rate{
        /* border: 1px solid; */
        width: 50%;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    i{padding:0%  1%;color:#505374}
    .li{
        list-style: square;
        /* border: 1px solid; */
        color: #505374;
        font-size: 18px;
        font-weight: 700;
        margin-left: 8%;
        padding: 1%;
    }
    .card{
        border-bottom: 1px solid #e9e9e9;
    
        padding: 1% 0%;
    }
    .card:last-child{
        border-bottom: none;
    }
    .list{
        /* border: 1px solid; */
        width: 80%;
        text-align: left;
        height: 100%;   
    }
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-areas: 
    "skills education"; 
    height: 83.2%;
    .skills { grid-area: skills;border-right:2px solid #e9e9e9;}

    .education { 
        grid-area: education;
        display: flex;
        flex-direction: column;
        align-items: center;
        .contain{
            /* border: 1px solid; */
            width: 98%;
            display: flex;
            flex-direction: column;
            height: 100%;
            
            .edu{
                p{
                font-weight: 600;
                line-height: 20px;
                width: 40%;
                margin-left: -22%;
            }
                display: flex;
                flex-direction: row;
                /* border: 1px solid; */
                justify-content: space-between;
                padding: 4% 0 2% 0;
                border-bottom: 1px solid #e9e9e9;
                .date{
                    align-self: center;
                    font-weight:500;
                    @media(max-width:800px){display: none;}}
                i{margin-top:4%;padding:0 3%}
                h1{margin-top: 2%;}
            @media (max-width:1200px){
                justify-content: inherit;
                p{margin-left:0;width:100%}
                i{margin-top:5%;}}
            }
            
        }
            
    }
    border-bottom: none;
    @media (max-width:800px){
        .skills{h1{padding:2% 0;text-align:center;}}
        .education{h1{padding:2% 0;align-self:center}}
    }
    @media (max-width:950px){
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 1fr;
                grid-template-areas: 
                "skills"
                "education";
                height: auto;
                width: 100%;
                .education .contain .edu h1{
                    background-color: red;
                }
                .card:last-child{
                    border-bottom: 3px solid #e9e9e9;
                }
                .skills{border:none}
                flex: 2;
            }
`


export {_body,_inbody,_section1,_section2}