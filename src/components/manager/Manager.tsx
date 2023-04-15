import React from "react";
import * as S from "./Manager.style";
import Sidebar from "./sidebar/Sidebar";

const Manager = () => {
  return (
    <S.ManagerMainContainer>
      <Sidebar />
      <S.ContentsBox></S.ContentsBox>
    </S.ManagerMainContainer>
  );
};

export default Manager;
