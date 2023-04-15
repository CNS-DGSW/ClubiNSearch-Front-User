import React from "react";
import * as S from "./Title.style";
import SearchIcon from "@/asset/managerPage/SearchIcon.svg";

const Title = () => {
  return (
    <nav>
      <p>프론트 엔드 개발자</p>
      <S.SearchBoxContainer>
        <S.SearchImageIcon src={SearchIcon} alt="" />
        <S.SearchInput type="text" placeholder="검색" />
      </S.SearchBoxContainer>
    </nav>
  );
};

export default Title;
