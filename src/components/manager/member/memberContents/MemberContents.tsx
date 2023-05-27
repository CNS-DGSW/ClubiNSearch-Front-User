import React from "react";
import * as S from "./MemberContents.style";
import TrashCanIcon from "@/asset/TrashCanIcon.svg";
import { IMemberValue } from "@/types/IMemberBoxValue";
import { useDrag } from "react-dnd";

interface IMonitorProps {
  index: number;
}

const MemberContents = (props: IMemberValue) => {
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
        // ChangeValue({
        //   state: props.ChangeValue.state,
        //   setState: props.ChangeValue.setState,
        //   containerIndex: a.index,
        //   userIndex: props.index,
        //   BeforeContainerIndex: props.beforeindex,
        // });
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
