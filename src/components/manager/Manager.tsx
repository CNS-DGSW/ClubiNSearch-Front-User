import React from "react";
import Title from "./contentsBox/Title";
import * as S from "./Manager.style";
import Sidebar from "./sidebar/Sidebar";

const Manager = () => {
  return (
    <S.ManagerMainContainer>
      <Sidebar />
      <S.ContentsBox>
        <Title />
      </S.ContentsBox>
    </S.ManagerMainContainer>
  );
};

export default Manager;
