import ReactPaginate from "react-paginate";
import styled from "styled-components";

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

export const ContentWrapper = styled.div`
    
    margin:auto;
    width: 60vw;
`

export const IntroH1 = styled.h1`
    margin-top: 3%;
    margin-left: 1rem;

    font-family: 'Inter';
    font-weight: 700;
    font-size: 1.8rem;
    
    color: #394050;
`

export const IntroDiv = styled.div`
    margin-left: 1rem;

    font-family: 'Inter';
    font-weight: 700;
    font-size: 11px;
    line-height: 17px;
    
    color: #858585;
`

export const ChooseGroupParents = styled.div`
    display: flex;

    margin-top: 1.8rem;
    margin-left: 1rem;
`

export const ChooseGroupBack = styled.div`
    margin-left: 30px;
    padding-left: 1px;
    padding-right: 1px;
`

export const ChooseGroupContent = styled.div`
    margin-left: 30px;
    position: relative;
    top: -19px;
    left: 3px;

    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #858585;
`

export const ChooseGroupBackClick = styled.div`
    background: rgba(21, 86, 247, 0.1);
    opacity: 0.3;
    border-radius: 25px;

    margin-left: 30px;
    padding-left: 1px;
    padding-right: 1px;
`

export const ChooseGroupContentClick = styled.div`
    margin-left: 30px;
    position: relative;
    top: -19px;
    left: 3px;

    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    
    color: #858585;
`

export const SearchBox = styled.div`
    display: flex;

    width: 60vw;
`

export const SearchPosition = styled.div`
    border: 3px solid #EBEBEB;
    border-radius: 10px;
    width: 33vw;
    min-width: 16rem;
    height: 49px;

    display: flex;
    align-items: center;
    padding-left: 1rem;
`

export const SearchTitleInput = styled.input`
    border: none;
    margin-left: 0.5rem;

    margin-right: 1rem;
    width: 100%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 17px;
    ::placeholder {
        color: #A5A4A4;
        font-weight: 600;
    }
    :focus {
        outline:none;
    }
`

export const ChoosePosition = styled.select`
    margin-left: 1rem;
    padding-left: 1rem;

    border: 3px solid #EBEBEB;
    border-radius: 10px;
    width: 19.5vw;
    height: 55px;
`

export const ChooseHowwork = styled.select`
    margin-left: 1rem;
    padding-left: 1rem;

    border: 3px solid #EBEBEB;
    border-radius: 10px;
    width: 19.5vw;
    height: 55px;
`

export const EachPostBox = styled.div`
    display: flex;
    height: 19px;
    > a {
        width: 33vw;
        padding-right: 3rem;
        min-width: 18.375rem;
        
        text-decoration: none;
        color: #000000;
        font-family: 'Inter';
        font-weight: 900;
        font-size: 1rem;
        line-height: 19px;
    }
`

// export const PostTitle = styled.div`
//     font-family: 'Inter';
//     font-weight: 900;
//     font-size: 1rem;
//     line-height: 19px;
// `

export const PostPosition = styled.div`
width: 18.5vw;
margin-right: 2rem;
`

export const PostHow = styled.div`
    width: 19.5vw;
`


export const StyledReactPaginate = styled(ReactPaginate).attrs({
    activeClassName : "active",
})`
    list-style: none;

    display: flex;
    justify-content: center;
    align-items: center;
    
    li {
        padding: 8px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
    }
    li.active {
        padding: 8px;

        background: rgba(21, 86, 247, 0.1);
        border-radius: 3px;
    }

`

export const PostWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    height: 40vh;
`

export const Footer = styled.footer`
    position: absolute;
    bottom: 0;

    width: 100%;
`