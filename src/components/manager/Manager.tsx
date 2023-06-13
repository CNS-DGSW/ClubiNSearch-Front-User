import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import * as S from "./Manager.style";
import * as TitleStyle from "./contentsBox/Title.style";
import PlusButton from "./common/PlusButton";
import SearchIcon from "@/asset/managerPage/SearchIcon.svg";
import MemederBox from "./member/MemederBox";
import { IMemberBoxValue } from "@/types/IMemberBoxValue";
import { IRecruitment } from "@/types/IRecruitment";
import Sidebar from "./sidebar/Sidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Modal from "./common/modal/Modal";
import NullMember from "./nullMember/NullMember";
import API from "@/util/api";
import { useRouter } from "next/router";

const Manager = () => {
  const router = useRouter();
  const [pageId, setPageId] = useState<number>(0);
  const [sidebarValue, setSidebarValue] = useState<IRecruitment[]>([]);
  const [memberContentsValue, setMemberContentsValue] = useState<
    IMemberBoxValue[]
  >([]);

  useEffect(() => {
    API.get(`api/recruitment/`)
      .then((value) => {
        let arr: IRecruitment[] = [];
        let copy = [...value.data];
        copy.map((val) => {
          arr.push({ ...val, isActive: false });
        });
        setSidebarValue(arr);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    const { id } = router.query;
    const Token: string | null = localStorage.getItem("accessToken");
    if (id) {
      setPageId(Number(id));
      if (!Token) return;
      API.get(`api/resume/list/${id}`, {
        headers: { Authorization: `Bearer ${Token}` },
      })
        .then((e) => {
          console.log(e);
        })
        .catch((e) => {
          console.log("err", e);
        });
    }
  }, [router]);

  const [modal, setModal] = useState<boolean>(false);
  return (
    <DndProvider backend={HTML5Backend}>
      <S.ManagerMainContainer>
        <Sidebar
          stateValue={sidebarValue}
          setStateValue={setSidebarValue}
          pageid={pageId}
        />
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

const Title = ({
  setModal,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [search, setSearch] = useState<string>();
  return (
    <TitleStyle.ContentsContainer>
      <TitleStyle.Title>프론트 엔드 개발자</TitleStyle.Title>
      <TitleStyle.SearchPlusButtonWrap>
        <TitleStyle.SearchBoxContainer>
          <TitleStyle.SearchImageIcon src={SearchIcon} alt="" />
          <>
            <TitleStyle.SearchInput
              type="text"
              placeholder="검색"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </>
        </TitleStyle.SearchBoxContainer>
        {/* <PlusButton setModal={setModal} /> */}
      </TitleStyle.SearchPlusButtonWrap>
    </TitleStyle.ContentsContainer>
  );
};

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
