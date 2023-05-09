import React, { useState } from "react";
import * as S from "./Sidebar.style";
import Logo from "@/asset/CNSLogo.svg";

const Sidebar = () => {
  const [position, setPosition] = useState([
    {
      name: "디자인",
      active: false,
      List: [{ name: "웹 디자인" }],
    },
    {
      name: "개발",
      active: true,
      List: [
        { name: "프론트엔드 개발자" },
        { name: "백엔드 개발자" },
        { name: "안드로이드 개발자" },
        { name: "iOS 개발자" },
      ],
    },
  ]);

  return (
    <S.MainContainer>
      <S.TitleContainer>
        <S.TitleImage src={Logo} alt="dd" />
        <S.TitleContext>Care And Service</S.TitleContext>
      </S.TitleContainer>
      <S.ContentsContainer>
        <>
          <>
            <></>
            <p>공고 리스트</p>
          </>
          <>
            <></>
            <></>
          </>
        </>
        <>
          <>
            <p>즐겨찾기</p>
            <></>
          </>
          <></>
        </>
        <>
          {position.map((value, index) => {
            return (
              <>
                <div
                  onClick={() => {
                    console.log(value.active);
                    let copyPosition = [...position];
                    copyPosition[index].active = !copyPosition[index].active;
                    setPosition([...copyPosition]);
                  }}
                >
                  {value.name}
                </div>
                {value.active
                  ? value.List.map((value) => {
                      return (
                        <>
                          <div>{value.name}</div>
                        </>
                      );
                    })
                  : null}
              </>
            );
          })}
        </>
      </S.ContentsContainer>
      <S.InquiryBox></S.InquiryBox>
    </S.MainContainer>
  );
};

export default Sidebar;
