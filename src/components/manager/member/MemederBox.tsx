import { IMemberBoxPropsValue } from "@/types/IMemberBoxValue";
import React, { useState } from "react";
import * as S from "./MemberBox.style";
import TrashCanIcon from "@/asset/TrashCanIcon.svg";
import MemberContents from "./memberContents/MemberContents";
import { useDrop } from "react-dnd";

const MemederBox = (props: IMemberBoxPropsValue) => {
  const [collectedProps, drop] = useDrop(() => ({
    accept: "BOX",
    drop: () => ({ index: props.Boxindex }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop,
      endDrop: monitor.getDropResult(),
    }),
  }));

  const DeleteMemberContainer = () => {
    if (!window.confirm(props.title + "을/를 삭제하시겠습니까?")) return;
    if (props.member[0]) {
      alert("남은 지원자를 이동시키거나 삭제해주세요.");
      return;
    }
    let copy = [...props.state];
    copy.splice(props.Boxindex, 1);
    props.setState(copy);
  };

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
              onClick={DeleteMemberContainer}
            />
          </S.TitleLeftContainer>
        </S.TitleConatainer>
        <S.MemberContainer ref={drop}>
          {props.member?.map((value, index) => {
            return (
              <MemberContents
                key={index}
                state={props.state}
                setState={props.setState}
                userIndex={index}
                BeforeContainerIndex={props.Boxindex}
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
