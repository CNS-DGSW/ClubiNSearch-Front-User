import styled from "styled-components";

export const Ask = styled.div`
    width: 65px;
    height: 103px;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    left: calc(100% - 15rem);
    top: 77%;

    > p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
    
        color: #858585;
    }
`