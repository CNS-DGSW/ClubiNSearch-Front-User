import React, { useState } from "react";
import Title from "./contentsBox/Title";
import * as S from "./Manager.style";
import MemederBox from "./member/MemederBox";
import { IMemberBoxValue } from "@/types/IMemberBoxValue";
import Sidebar from "./sidebar/Sidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Modal from "./common/modal/Modal";

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
  const MemberBox2: IMemberBoxValue = {
    title: "지원 접수",
    member: [
      {
        name: "황주완",
        schoolNumber: "2307",
        phoneNumber: "010-6207-7445",
        introduce: "열심히 하겠습니다.",
      },
      {
        name: "노지석",
        schoolNumber: "2301",
        phoneNumber: "010-1234-4567",
        introduce: "열심히 쓸겠습니다.",
      },
      {
        name: "조완규",
        schoolNumber: "2403",
        phoneNumber: "010-1234-5678",
        introduce: "열심히 하겠습니다.",
      },
    ],
  };
  const MemberBox3: IMemberBoxValue = {
    title: "111",
    member: [
      {
        name: "김민성",
        schoolNumber: "2307",
        phoneNumber: "010-6207-7445",
        introduce: "열심히 하겠습니다.",
      },
      {
        name: "조근호",
        schoolNumber: "2301",
        phoneNumber: "010-1234-4567",
        introduce: "열심히 하겠습니다.",
      },
      {
        name: "장민교",
        schoolNumber: "2403",
        phoneNumber: "010-1234-5678",
        introduce: "열심히 하겠습니다.",
      },
    ],
  };
  const [memberContentsValue, setMemberContentsValue] = useState<
    IMemberBoxValue[]
  >([MemberBox1, MemberBox2, MemberBox3, { title: "ddd", member: [] }]);

  const [modal, setModal] = useState<boolean>(false);
  return (
    <DndProvider backend={HTML5Backend}>
      <S.ManagerMainContainer>
        <Sidebar />
        <S.ContentsBox>
          <Title setModal={setModal} />
          <S.MemberContentsContainer>
            {memberContentsValue.map((value, index) => {
              return (
                <MemederBox
                  key={index}
                  state={memberContentsValue}
                  setState={setMemberContentsValue}
                  Boxindex={index}
                  title={value.title}
                  member={value.member}
                />
              );
            })}
          </S.MemberContentsContainer>
        </S.ContentsBox>
      </S.ManagerMainContainer>
      {modal && (
        <Modal
          setModal={setModal}
          setMemberContentsValue={setMemberContentsValue}
        />
      )}
    </DndProvider>
  );
};

export default Manager;
