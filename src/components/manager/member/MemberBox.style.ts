import styled from "styled-components";
import Image from "next/image";

export const MainContainer = styled.nav`
  width: 20rem;
  height: 100%;
  margin-right: 5rem;
`;

export const SubContainer = styled.nav`
  width: 20rem;
  height: 98%;
  background-color: #f3f3f3;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

export const TitleConatainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 5%;
  border-bottom: 1px solid #d7d7d7;
`;

export const Title = styled.p`
  font-size: 0.875rem;
  font-weight: bold;
`;

export const TitleDateInput = styled.input`
  border: none;
  background-color: transparent;
  filter: opacity(30%);
  width: 8rem;
  text-align: right;
  letter-spacing: -0.05rem;
`;

export const TrashCanIcon = styled(Image)`
  width: 1rem;
  height: 1rem;
  margin-left: 0.75rem;
`;

export const TitleLeftContainer = styled.div`
  display: flex;
`;
