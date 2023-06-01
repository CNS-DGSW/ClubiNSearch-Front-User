import React, { useEffect, useState } from "react";
import Title from "./contentsBox/Title";
import * as S from "./Manager.style";
import MemederBox from "./member/MemederBox";
import { IMemberBoxValue } from "@/types/IMemberBoxValue";
import { IRecruitment } from "@/types/IRecruitment";
import Sidebar from "./sidebar/Sidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Modal from "./common/modal/Modal";
import NullMember from "./nullMember/NullMember";
import API from "@/util/api";

const Manager = () => {
  const [sidebarValue, setSidebarValue] = useState<IRecruitment[]>([]);
  const [memberContentsValue, setMemberContentsValue] = useState<
    IMemberBoxValue[]
  >([
    {
      title: "📩 지원 접수",
      member: [],
    },
  ]);
  useEffect(() => {
    API.get(`api/recruitment/`)
      .then((value) => {
        let arr: IRecruitment[] = [];
        let copy = [...value.data];
        copy.map((val) => {
          arr.push({ ...val, isActive: false });
          console.log(arr);
        });
        setSidebarValue(arr);
      })
      .catch((error) => console.log(error));
  }, []);

  const [modal, setModal] = useState<boolean>(false);
  return (
    <DndProvider backend={HTML5Backend}>
      <S.ManagerMainContainer>
        <Sidebar stateValue={sidebarValue} setStateValue={setSidebarValue} />
        <S.ContentsBox>
          <Title setModal={setModal} />
          <S.MemberContentsContainer>
            {memberContentsValue[0] ? (
              memberContentsValue.map((value, index) => {
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
              })
            ) : (
              <NullMember />
            )}
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

/*
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
*/
//[MemberBox1, MemberBox2, MemberBox3, { title: "ddd", member: [] }]
