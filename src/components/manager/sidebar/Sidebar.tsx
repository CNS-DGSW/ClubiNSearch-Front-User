import React from "react";
import * as S from "./Sidebar.style";
import Logo from "@/asset/CNSLogo.svg";

const Sidebar = () => {
  return (
    <S.MainContainer>
      <S.TitleContainer>
        <S.TitleImage src={Logo} alt="dd" />
        <S.TitleContext>Care And Service</S.TitleContext>
      </S.TitleContainer>
      <S.InquiryBox></S.InquiryBox>
    </S.MainContainer>
  );
};

export default Sidebar;
