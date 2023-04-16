import React from "react";
import * as S from "./Title.style";
import SearchIcon from "@/asset/managerPage/SearchIcon.svg";

const Title = () => {
  return (
    <S.ContentsContainer>
      <S.Title>프론트 엔드 개발자</S.Title>
      <S.SearchBoxContainer>
        <S.SearchImageIcon src={SearchIcon} alt="" />
        <S.SearchInput type="text" placeholder="검색" />
      </S.SearchBoxContainer>
    </S.ContentsContainer>
  );
};

export default Title;
