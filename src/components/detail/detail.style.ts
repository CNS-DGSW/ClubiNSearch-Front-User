import styled from "styled-components";

export const ImportFont = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Andika:ital@0;1&family=Inter:wght@400;700&family=Raleway&display=swap');
`

export const AdWrapper = styled.div`
    width: 100%;
    height: 5rem;
    background: #1A1F27;

    display: flex;
    align-items: center;
    justify-content: center;
    >img{
        padding-top: 1.2rem;
    }
`

export const Content = styled.div`
    width: 50vw;
    word-break: keep-all;
    margin-bottom: 3vh;

    > h1, h2, h3{
        margin-top: 1vh;
    }
    > ul, p{
        margin-top: 0.6rem;
        line-height: 1.7rem;
        color: #858585;
        font-weight: 700;
    }
`

export const Box = styled.div`
    width: 251px;
    height: 167px;
    margin-top: 10vh;
`

export const ContentWrapper = styled.div`
    margin-top: 4rem;
    margin-left: 10vw;
    margin-right: 10vw;
    display: flex;
    justify-content: space-evenly;
`

export const EachBox = styled.div`
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;

    display: flex;
    position: relative;
`

export const Hr = styled.hr`
    background: #D9D9D9;
`

export const Label = styled.div`
    margin-left: 0.2rem;
    position: absolute;

    font-family: 'Inter';
    font-weight: 700;
    font-size: 0.6rem;
    line-height: 0.7rem;
    color: #858585;
`

export const Introduce = styled.div`
    margin-left: 5.5rem;

    font-family: 'Inter';
    font-weight: 700;
    font-size: 0.6rem;
    line-height: 0.7rem;
    
    color: #4980EE;
`

export const ApplyBtn = styled.button`
    width: 15.6rem;
    height: 2.1rem;
    border: hidden;
    border-radius: 5px;
    background-color: #4980EE;
    margin-top: 0.5rem;
    
    > a{
        text-decoration: none;
        color:  #FFFFFF ;
        font-family: 'Nanum Myeongjo';
        font-style: normal;
        font-weight: 700;
        font-size: 0.6rem;
        line-height: 0.7rem;  
    }

`
