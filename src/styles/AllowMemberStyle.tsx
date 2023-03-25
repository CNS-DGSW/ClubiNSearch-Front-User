import styled from "styled-components";

export const title = styled.p`
  color: #394050;
  font-size: 2.2rem;
  font-weight: bold;
  letter-spacing: -0.1rem;
`;

export const subTitle = styled.p`
  color: 666666;
  font-weight: bold;
  font-size: 0.9rem;
`;

export const MainWrapDiv = styled.div`
  margin: 5rem auto;
  width: 27rem;
`;

export const ButtonStyle = styled.button`
  background-color: rgba(21, 86, 247, 0.8);
  padding: 1rem;
  box-shadow: none;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: rgba(21, 86, 247, 0.9);
  }
  &:active {
    background-color: rgba(21, 86, 247);
  }
  margin-top: 3rem;
`;
