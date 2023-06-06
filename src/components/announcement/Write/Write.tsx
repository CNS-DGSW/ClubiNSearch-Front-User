import { useState, useEffect } from "react";
import { DateStateType } from "../../../types/writeValue";
import * as S from "./Write.style";
import Position from "../Select/Position";
import Period from "../Select/Period";

const Write = () => {
  const [Data, setData] = useState<DateStateType>({
    title: "",
    position: "",
    startDate: { year: "", month: "", day: "" },
    endDate: { year: "", month: "", day: "" },
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
      <S.titleContainer>
        <div style={{ display: "flex" }}>
          <h4>채용 공고 제목</h4>
          <h4 style={{ color: "red" }}>*</h4>
        </div>
        <input
          type="text"
          name="title"
          value={title}
          onChange={DateChange}
          placeholder="공고 제목을 입력해 주세요."
        ></input>
        <div style={{ display: "flex" }}>
          <h4>채용 포지션</h4>
          <h4 style={{ color: "red" }}>*</h4>
        </div>
        <Position position={position} setPosition={setData} />
        <div style={{ display: "flex" }}>
          <h4>채용 기간</h4>
          <h4 style={{ color: "red" }}>*</h4>
        </div>
        <Period
          startDate={startDate}
          setStartDate={setData}
          endDate={endDate}
          setEndDate={setData}
        />
      </S.titleContainer>
    </div>
  );
};

export default Write;
