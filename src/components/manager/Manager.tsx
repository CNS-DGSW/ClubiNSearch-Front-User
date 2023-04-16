import React from "react";
import Title from "./contentsBox/Title";
import * as S from "./Manager.style";
import MemederBox from "./member/MemederBox";
import Sidebar from "./sidebar/Sidebar";

const Manager = () => {
  return (
    <S.ManagerMainContainer>
      <Sidebar />
      <S.ContentsBox>
        <Title />
        <S.MemberContentsContainer>
          <MemederBox></MemederBox>
          <MemederBox></MemederBox>
          <MemederBox></MemederBox>
          <MemederBox></MemederBox>
          <MemederBox></MemederBox>
          <MemederBox></MemederBox>
          <MemederBox></MemederBox>
        </S.MemberContentsContainer>
      </S.ContentsBox>
    </S.ManagerMainContainer>
  );
};

export default Manager;
