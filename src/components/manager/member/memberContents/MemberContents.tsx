import React from "react";
import * as S from "./MemberContents.style";
import TrashCanIcon from "@/asset/TrashCanIcon.svg";
import { IMemberValue } from "@/types/IMemberBoxValue";

const MemberContents = (props: IMemberValue) => {
  return (
    <S.MemberContainer>
      <S.MemberContents>
        <S.MemberDeleteButton src={TrashCanIcon} alt="" />
        <S.MemberName>{props.name}</S.MemberName>
        <S.MemberContentsContainer>
          학번 :<S.MemberEachContent>{props.schoolNumber}</S.MemberEachContent>
        </S.MemberContentsContainer>
        <S.MemberContentsContainer>
          연락처 :{" "}
          <S.MemberEachContent>{props.phoneNumber}</S.MemberEachContent>
        </S.MemberContentsContainer>
        <S.MemberContentsContainer>한줄 자기소개 :</S.MemberContentsContainer>
        <S.MemberEachContent>{props.introduce}</S.MemberEachContent>
      </S.MemberContents>
    </S.MemberContainer>
  );
};

export default MemberContents;
