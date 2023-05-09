import React from "react";
import Title from "./contentsBox/Title";
import * as S from "./Manager.style";
import MemederBox from "./member/MemederBox";
import { IMemberBoxValue } from "@/types/IMemberBoxValue";
import Sidebar from "./sidebar/Sidebar";

const Manager = () => {
  const MemberBox1: IMemberBoxValue = {
    title: "📩 지원 접수",
    member: [
      {
        name: "배경민",
        schoolNumber: "2307",
        phoneNumber: "010-6207-7445",
        introduce: "열심히 하겠습니다.",
      },
      {
        name: "조수현",
        schoolNumber: "2301",
        phoneNumber: "010-1234-4567",
        introduce: "열심히 하겠습니다.",
      },
      {
        name: "최아영",
        schoolNumber: "2403",
        phoneNumber: "010-1234-5678",
        introduce: "열심히 하겠습니다.",
      },
    ],
  };
  const MemberContentsValue: IMemberBoxValue[] = [
    MemberBox1,
    MemberBox1,
    MemberBox1,
    MemberBox1,
  ];
  return (
    <S.ManagerMainContainer>
      <Sidebar />
      <S.ContentsBox>
        <Title />
        <S.MemberContentsContainer>
          {MemberContentsValue.map((value, index) => {
            return (
              <MemederBox
                key={index}
                title={value.title}
                member={value.member}
              />
            );
          })}
        </S.MemberContentsContainer>
      </S.ContentsBox>
    </S.ManagerMainContainer>
  );
};

export default Manager;
