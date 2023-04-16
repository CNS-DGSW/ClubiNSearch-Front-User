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
          <MemederBox title="📩 지원 접수"></MemederBox>
          <MemederBox title="1"></MemederBox>
          <MemederBox title="2"></MemederBox>
          <MemederBox title="3"></MemederBox>
          <MemederBox title="4"></MemederBox>
          <MemederBox title="5"></MemederBox>
          <MemederBox title="56"></MemederBox>
        </S.MemberContentsContainer>
      </S.ContentsBox>
    </S.ManagerMainContainer>
  );
};

export default Manager;
