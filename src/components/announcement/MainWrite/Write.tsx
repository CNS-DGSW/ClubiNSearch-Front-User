import React from "react";
import * as S from "./Write.style";

const addMainTextatea = () => {};

const Write = () => {
  return (
    <S.allContainer>
      <S.mainContainer>
        <S.mainContent>
          <S.mainTitle>작성</S.mainTitle>
          <S.content>
            <S.contentTitle>제목</S.contentTitle>
            <S.contentPoint>*</S.contentPoint>
          </S.content>
          <S.titleInput
            type="text"
            name="title"
            placeholder="제목을 입력해주세요."
          ></S.titleInput>
          <S.content>
            <S.contentTitle>내용</S.contentTitle>
            <S.contentPoint>*</S.contentPoint>
          </S.content>
          <S.mainTextarea placeholder="내용을 입력해주세요."></S.mainTextarea>
        </S.mainContent>
      </S.mainContainer>
      <S.subButton>게시하기</S.subButton>
    </S.allContainer>
  );
};
export default Write;
