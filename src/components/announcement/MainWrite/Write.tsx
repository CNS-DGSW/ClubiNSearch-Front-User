import React, { useEffect, useState } from "react";
import * as S from "./Write.style";
import axios from "axios";
import API from "@/util/api";
import {
  clubNameAtom,
  employmentTypeAtom,
  positionAtom,
  startDateAtom,
  endDateAtom,
  titleAtom,
  detailContentAtom,
} from "@/atom/WriteAtom";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { WriteType } from "@/types/WriteValue";

const Write = () => {
  const [clubName] = useRecoilState(clubNameAtom);
  const [employmentType] = useRecoilState(employmentTypeAtom);
  const [position] = useRecoilState(positionAtom);
  const [startDate] = useRecoilState(startDateAtom);
  const [endDate] = useRecoilState(endDateAtom);

  const [title, setTitle] = useRecoilState(titleAtom);
  const [detailContent, setDetailContent] = useRecoilState(detailContentAtom);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDetailContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDetailContent(event.target.value);
  };

  const handleSubmit = async () => {
    const payload = {
      clubName: clubName,
      title: title,
      position: position,
      employmentType: employmentType,
      detailContent: detailContent,
      startDate: startDate,
      endDate: endDate,
      isOpen: true,
    };
    try {
      const response = await API.post("/api/recruitment/create", payload);
      console.log(response.data);
      alert("작성한 공고가 게시되었습니다.");
    } catch (error) {
      console.error(error);
      console.log(payload);
    }
  };

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
            value={title}
            onChange={handleTitleChange}
          ></S.titleInput>
          <S.content>
            <S.contentTitle>내용</S.contentTitle>
            <S.contentPoint>*</S.contentPoint>
          </S.content>
          <S.mainTextarea
            placeholder="내용을 입력해주세요."
            name="detailContent"
            value={detailContent}
            onChange={handleDetailContentChange}
          ></S.mainTextarea>
        </S.mainContent>
      </S.mainContainer>
      <S.subButton onClick={handleSubmit}>게시하기</S.subButton>
    </S.allContainer>
  );
};

export default Write;
