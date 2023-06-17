import { IMemberBoxPropsValue } from "@/types/IMemberBoxValue";
import React, { useEffect, useState } from "react";
import * as S from "./MemberBox.style";
import TrashCanIcon from "@/asset/TrashCanIcon.svg";
import MemberContents from "./memberContents/MemberContents";
import { useDrop } from "react-dnd";
import ChangeValue from "@/util/ChangeValue";

const MemederBox = (props: IMemberBoxPropsValue) => {
  const [, drop] = useDrop(() => ({
    accept: "BOX",
    drop: () => ({ index: props.Boxindex }),
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
            <S.TrashCanIcon
              src={TrashCanIcon}
              alt=""
              onClick={() => {
                ChangeValue({
                  State: {
                    stateValue: props.state,
                    setState: props.setState,
                  },
                  Delete: {
                    Containerindex: props.Boxindex,
                  },
                });
              }}
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
                schoolNumber={value.studentNo}
                phoneNumber={value.contact}
                introduce={value.introduction}
                link={value.link}
                portfolio={value.fileUrl}
                resumeId={value.resumeId}
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
