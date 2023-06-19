import React from "react";
import * as S from "./Write.style";
import axios from "axios";

const Write = ({ Data }: any) => {
  const { title, position, startDate, endDate, employmentType, detailContent } =
    Data;

  const DateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    console.log(title);
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        title: title,
        position: position,
        startDate: startDate,
        endDate: endDate,
        employmentType: employmentType,
        detailContent: detailContent,
      };

      const response = await axios.post("/api/recruitment/create", payload);
      console.log(response.data);
    } catch (error) {
      console.log(error);
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
            name="employmentType"
            placeholder="제목을 입력해주세요."
            value={employmentType}
            onChange={DateChange}
          ></S.titleInput>
          <S.content>
            <S.contentTitle>내용</S.contentTitle>
            <S.contentPoint>*</S.contentPoint>
          </S.content>
          <S.mainTextarea
            placeholder="내용을 입력해주세요."
            name="detailContent"
            value={detailContent}
            onChange={DateChange}
          ></S.mainTextarea>
        </S.mainContent>
      </S.mainContainer>
      <S.subButton onClick={handleSubmit}>게시하기</S.subButton>
    </S.allContainer>
  );
};
export default Write;
function setData(arg0: (prevData: any) => any) {
  throw new Error("Function not implemented.");
}
