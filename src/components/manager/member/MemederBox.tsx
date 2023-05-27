import { IMemberBoxValue } from "@/types/IMemberBoxValue";
import React, { useState } from "react";
import * as S from "./MemberBox.style";
import TrashCanIcon from "@/asset/TrashCanIcon.svg";
import MemberContents from "./memberContents/MemberContents";
import { useDrop } from "react-dnd";

const MemederBox = (props: IMemberBoxValue) => {
  const [menuClick, setMenuClick] = useState<boolean>(false);
  const [collectedProps, drop] = useDrop(() => ({
    accept: "BOX",
    drop: () => ({ index: props.index }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop,
      endDrop: monitor.getDropResult(),
    }),
  }));
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
        <S.MemberContainer ref={drop}>
          {props.member?.map((value, index) => {
            return (
              <MemberContents
                key={index}
                name={value.name}
                schoolNumber={value.schoolNumber}
                phoneNumber={value.phoneNumber}
                introduce={value.introduce}
              ></MemberContents>
            );
          })}
        </S.MemberContainer>

        <S.FooterNumOfPeople>
          전체 인원 : ({props.member?.length})
        </S.FooterNumOfPeople>
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default MemederBox;
