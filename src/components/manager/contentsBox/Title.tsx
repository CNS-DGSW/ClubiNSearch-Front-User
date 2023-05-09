import React from "react";
import * as S from "./Title.style";
import SearchIcon from "@/asset/managerPage/SearchIcon.svg";
import PlusButton from "../common/PlusButton";

const Title = () => {
  return (
    <S.ContentsContainer>
      <S.Title>프론트 엔드 개발자</S.Title>
      <S.SearchPlusButtonWrap>
        <S.SearchBoxContainer>
          <S.SearchImageIcon src={SearchIcon} alt="" />
          <>
            <S.SearchInput type="text" placeholder="검색" />
          </>
        </S.SearchBoxContainer>
        <PlusButton />
      </S.SearchPlusButtonWrap>
    </S.ContentsContainer>
  );
};

export default Title;
