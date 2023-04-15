import styled from "styled-components";
import Logo from "../../../asset/CNSLogo.svg";
import Image from "next/image";

export const MainContainer = styled.nav`
  width: 20%;
  height: 100%;
  background-color: #fafafa;
  box-shadow: inset -0.25rem -0rem 1rem rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const TitleContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0rem auto;
  padding: 2rem 0rem;
`;

export const TitleImage = styled(Image)`
  background-image: url(${Logo});
  background-size: cover;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-right: 0.8rem;
  box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.5);
`;

export const TitleContext = styled.p`
  font-size: 1.25rem;
  color: #394050;
  font-weight: bold;
  text-shadow: 0rem 0.2rem 0.3rem rgba(0, 0, 0, 0.4);
`;

export const InquiryBox = styled.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: transparent;
  border-top: 1px solid #d9d9d9;
`;
