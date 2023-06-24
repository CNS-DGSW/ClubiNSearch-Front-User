import React from "react";
import * as S from "./Write.style";
import API from "@/util/api";
import {
  clubNameAtom,
  titleAtom,
  positionAtom,
  startDateAtom,
  endDateAtom,
  employmentTypeAtom,
  detailContentAtom,
} from "@/store/WriteAtom";
import { useRecoilState } from "recoil";

const Write = () => {
  const [clubName] = useRecoilState<string>(clubNameAtom);
  const [employmentType] = useRecoilState<string>(employmentTypeAtom);
  const [position] = useRecoilState<string>(positionAtom);
  const [startDate] = useRecoilState<string>(startDateAtom);
  const [endDate] = useRecoilState<string>(endDateAtom);
  const [title, setTitle] = useRecoilState<string>(titleAtom);
  const [detailContent, setDetailContent] =
    useRecoilState<string>(detailContentAtom);

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

    console.log("dfdfdf", payload);

    const Token: string | null = localStorage.getItem("accessToken");
    await API.post(
      "/api/recruitment/create",
      {
        clubName: clubName,
        title: title,
        position: position,
        employmentType: employmentType,
        detailContent: detailContent,
        startDate: startDate,
        endDate: endDate,
        isOpen: true,
      },
      {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }
    )
      .then((e) => {
        console.log(e);
        alert("작성하신 공고가 게시되었습니다.");
      })
      .catch((e) => {
        console.log(e);
      });
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
