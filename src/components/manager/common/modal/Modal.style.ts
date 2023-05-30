import styled, { keyframes } from "styled-components";

const ModalAnimation = keyframes`
    0%{
        transform: translate(-50rem);
    }100%{
        transform: translate(0rem);
    }
`;

export const MainBackground = styled.div`
  width: 90%;
  height: 90%;
`;

export const MainContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 40%;
  height: 80%;
  left: 50%;
  background-color: white;
  border-radius: 1rem;
  margin: 5%;
  box-shadow: 0rem 1rem 1rem rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ExitBtn = styled.button`
  border: none;
  border-radius: 0.3rem;
  background-color: #4478f9;
  color: white;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  font-weight: 500;
  &:hover {
    background-color: #2d5bce;
  }
  &:active {
    background-color: #254baa;
  }
`;
