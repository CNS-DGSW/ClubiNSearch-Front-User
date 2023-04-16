import React from "react";
import * as S from "./MemberBox.style";

const MemederBox = () => {
  return (
    <S.MainContainer>
      <S.SubContainer>
        <S.TitleConatainer>
          <S.Title>📩 지원 접수</S.Title>
          <S.TitleDateInput type="date" placeholder="날짜 선택" />
        </S.TitleConatainer>
        <div></div>
        <div></div>
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default MemederBox;
