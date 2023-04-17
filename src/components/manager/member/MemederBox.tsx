import { IMemberBoxValue } from "@/types/IMemberBoxValue";
import React, { useState } from "react";
import * as S from "./MemberBox.style";
import TrashCanIcon from "@/asset/TrashCanIcon.svg";
import MemberContents from "./memberContents/MemberContents";

const MemederBox = (props: IMemberBoxValue) => {
  const [menuClick, setMenuClick] = useState<boolean>(false);

  return (
    <S.MainContainer>
      <S.SubContainer>
        <S.TitleConatainer>
          <S.Title>{props.title}</S.Title>
          <S.TitleLeftContainer>
            <S.TitleDateInput type="date" placeholder="날짜 선택" />
            <S.TrashCanIcon
              src={TrashCanIcon}
              alt=""
              onClick={() => setMenuClick(true)}
            />
          </S.TitleLeftContainer>
        </S.TitleConatainer>
        {props.member?.map((value) => {
          return (
            <MemberContents
              name={value.name}
              schoolNumber={value.schoolNumber}
              phoneNumber={value.phoneNumber}
              introduce={value.introduce}
            ></MemberContents>
          );
        })}
        <MemberContents
          name={"배경민"}
          schoolNumber={"2307"}
          phoneNumber={"010-6207-7445"}
          introduce={"안녕하세요. 성장하는 개발자입니다."}
        ></MemberContents>
        <S.FooterNumOfPeople>전체 인원 : (1)</S.FooterNumOfPeople>
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default MemederBox;
