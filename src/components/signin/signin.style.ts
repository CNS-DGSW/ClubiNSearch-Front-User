import styled, {GlobalStyleComponent, createGlobalStyle} from "styled-components";
import Image from "next/image"

// export const Wrapper = styled.div`
//     display: flex;
//     justify-content: center;
// `

export const ContentWrapper = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    
`

// export const GlobalStyle = createGlobalStyle`
//     body{
//         height: 100vh;
//         display: flex;
//         flex-direction: column;
//     }
// `

export const TitleLogo = styled(Image)`
`

export const Title = styled.div`
    margin-top: 1vh;

    font-weight: 700;
    font-size: 1.9rem;
    color: #394050;
`

export const AllWithoutTitle = styled.div`
    margin-top: 4vh;
`

export const InputWrapper = styled.div`
    margin: 2vh 0;

`

export const InputLabel = styled.p`
    font-weight: 900;
    font-size: 0.9rem;
    color: #666666;
`

export const Input = styled.input`
    margin-top: 0.5vh;
    width: 23rem;
    height: 2rem;

    border: 1px solid #C0C0C0;
    border-radius: 5px;
    :hover{
        outline: none;
    }
    :focus{
        outline: none;
    }
`

export const SubmitBtn = styled.button`
    width: 23rem;
    height: 3rem;
    background-color: rgba(21, 86, 247, 0.8);
    border: none;
    border-radius: 5px;

    font-weight: 900;
    font-size: 1rem;
    color: #FFFFFF;

`

export const GrayLabel = styled.p`
    margin-top: 0.5rem;

    font-weight: 700;
    font-size: 0.9rem;
    color: #C0C0C0;

`