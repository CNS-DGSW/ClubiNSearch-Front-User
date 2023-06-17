import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import * as S from "./Title.style";
import SearchIcon from "@/asset/managerPage/SearchIcon.svg";
import PlusButton from "../common/PlusButton";
import { useRouter } from "next/router";
import { IMemberBoxValue } from "@/types/IMemberBoxValue";
import API from "@/util/api";

const Title = ({
  setStateValue,
  setModal,
  pageid,
}: {
  setStateValue: Dispatch<SetStateAction<IMemberBoxValue[]>>;
  setModal: Dispatch<SetStateAction<boolean>>;
  pageid: number;
}) => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [title, setTitle] = useState<string>();

  const DeleteMember = (copy: IMemberBoxValue[]) => {
    let copy2 = [...copy];
    copy.map((Membervalue, memberIndex) => {
      Membervalue.member.map((MemberInformaionvalue, index) => {
        if (MemberInformaionvalue.name.indexOf(search) === -1) {
          copy2[memberIndex].member.splice(index, 1);
          DeleteMember(copy2);
        }
      });
    });
    return copy2;
  };

  const ServerConnect = ({
    Token,
    id,
  }: {
    Token: string;
    id: string | string[];
  }) => {
    let copy: IMemberBoxValue[] = [];
    API.get(`api/resume/admin/list/${id}`, {
      headers: { Authorization: `Bearer ${Token}` },
    })
      .then((e) => {
        if (e.data) {
          // console.log(e.data);
          copy = [...e.data];
          DeleteMember(copy);
          setStateValue([...copy]);
        }
      })
      .catch(() => {
        setStateValue([]);
      });
  };

  useEffect(() => {
    API.get(`api/recruitment/${pageid}`)
      .then((value) => {
        setTitle(value.data.title);
      })
      .catch((_) => {});
  }, [pageid]);

  useEffect(() => {
    const { id } = router.query;
    console.log("dddddddd");

    const Token: string | null = localStorage.getItem("accessToken");
    if (id) {
      if (!Token) return;
      ServerConnect({ Token, id });
    }
  }, [router, search]);

  return (
    <S.ContentsContainer>
      <S.Title>{title}</S.Title>
      <S.SearchPlusButtonWrap>
        <S.SearchBoxContainer>
          <S.SearchImageIcon src={SearchIcon} alt="" />
          <>
            <S.SearchInput
              type="text"
              placeholder="이름을 입력해주세요."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </>
        </S.SearchBoxContainer>
        {/* <PlusButton setModal={setModal} /> */}
      </S.SearchPlusButtonWrap>
    </S.ContentsContainer>
  );
};

export default Title;
