import styled from "styled-components";

const _in=styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
`

const _sidebar =styled.div`
    flex: 1;
    background-color: #eaeaea;
    h1{ 
    padding: 10%;
    color: white;
    border-radius: 0% 0% 50% 50% / 0% 0% 30% 30%  ;
    text-align:center;
    background-color: #505374;
    }
    .contain{
    border-radius: 0% 0% 50% 50% / 0% 0% 25% 25%  ;
    padding-bottom: 4%;
    background-color:#2e3261;
    /* margin-bottom: 1%; */
    }
    .sidebarlittercontain{
    height: 79.9%;
    display: flex;
    flex-direction: column;
    align-items: center;
        }
    .sidebarinside{
    /* border: 1px solid; */
    width: 85%;
    height: 100%;
    }

    h2{
    font-weight: 800;
    /* border:1px solid; */
    padding: 8% 0%;
    /* margin: 0 0 10% 0; */
    color: #544d4f;
    }
    h3{
    color: #544d4f;
    }
    h4{
    color:#544d4f;
    margin: 1% 0 0 15%;
    font-size: 13px;
    }
    i{
    color: #505374;
    font-size: 15px;
    width: 4%;
    }
    .card{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 10%;
    padding: 3% 0%;
    /* border: 1px solid; */
    }

    ul{
    margin: -10px -10px 20px -10px;
    list-style: square ;
    color: #505374;
    font-size: 20px;
    /* border: 1px solid; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    }
    li{width:30%}
    .rate{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: right;

    }
    height: 99.8vh;
    @media (max-width:1535px){
        height: auto;
    }
    @media (max-width:950px){
        flex: 2;
        
    }
    @media (max-width:600px){
        flex: 3;
    }
`

export {_in,_sidebar}