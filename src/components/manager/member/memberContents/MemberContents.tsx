import React from "react";
import * as S from "./MemberContents.style";
import TrashCanIcon from "@/asset/TrashCanIcon.svg";
import { IMemberPropsValue } from "@/types/IMemberValue";
import { useDrag } from "react-dnd";
import ChangeValue from "@/util/ChangeValue";

interface IMonitorProps {
  index: number;
}

const MemberContents = (props: IMemberPropsValue) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "BOX",
    item: { name: props.name },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
    end: (item, monitor) => {
      const a = monitor.getDropResult<IMonitorProps>();
      if (item && a) {
        ChangeValue({
          state: props.state,
          setState: props.setState,
          containerIndex: a.index,
          userIndex: props.userIndex,
          BeforeContainerIndex: props.BeforeContainerIndex,
        });
      }
    },
  }));
  return (
    <S.MemberContainer ref={drag}>
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
