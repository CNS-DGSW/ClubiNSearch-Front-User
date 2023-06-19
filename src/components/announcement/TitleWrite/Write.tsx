import { useState, useEffect } from "react";
import { DateStateType } from "../../../types/writeValue";
import * as S from "./Write.style";
import Position from "../Select/Position";
import MainWrite from "@/components/announcement/MainWrite/Write";
import axios from "axios";
import { atom } from "recoil";

const Write = () => {
  const [Data, setData] = useState<DateStateType>({
    title: "",
    position: "",
    startDate: "",
    endDate: "",
    employmentType: "",
    detailContent: "",
  });

  const { title, position, startDate, endDate } = Data;

  const DateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    console.log(title);
  };

  return (
    <div>
      <S.parentTitle>공고 작성하기</S.parentTitle>
      <S.allContainer>
        <S.titleContainer>
          <S.titleContent>
            <S.content>
              <S.contentTitle>채용 공고 제목</S.contentTitle>
              <S.contentPoint>*</S.contentPoint>
            </S.content>
            <S.titleInput
              type="text"
              name="title"
              value={title}
              onChange={DateChange}
              placeholder="공고 제목을 입력해주세요."
            ></S.titleInput>
            <S.content>
              <S.contentTitle>채용 포지션</S.contentTitle>
              <S.contentPoint>*</S.contentPoint>
            </S.content>
            <Position position={position} setPosition={setData} />
            <S.content>
              <S.contentTitle>채용 기간</S.contentTitle>
              <S.contentPoint>*</S.contentPoint>
            </S.content>
            <S.selectContainer>
              <S.dateSelect
                type="date"
                name="startDate"
                value={startDate}
                onChange={DateChange}
              ></S.dateSelect>
              <S.dateSign> ~ </S.dateSign>
              <S.dateSelect type="date"></S.dateSelect>
            </S.selectContainer>
          </S.titleContent>
        </S.titleContainer>
      </S.allContainer>
      <MainWrite Data={Data} />
    </div>
  );
};

export default Write;
