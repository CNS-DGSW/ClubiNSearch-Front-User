import React, { useEffect, useRef, useState } from "react";
import * as S from "./MemberContents.style";
import TrashCanIcon from "@/asset/TrashCanIcon.svg";
import { IMemberPropsValue } from "@/types/IMemberValue";
import { useDrag } from "react-dnd";
import ChangeValue from "@/util/ChangeValue";
import { IMemberBoxValue } from "@/types/IMemberBoxValue";
import API from "@/util/api";

interface IMonitorProps {
  index: number;
}

const MemberContents = (props: IMemberPropsValue) => {
  const [copyStateValue, setCopyStateValue] = useState<IMemberBoxValue[]>([
    ...props.state,
  ]);

  const [containerIndex, setContainerIndex] = useState<number>();
  useEffect(() => {
    setCopyStateValue([...props.state]);
  }, [props.state]);

  const DeleteMember = () => {
    if (!window.confirm(props.name + " 지원자를 삭제하시겠습니까?")) return;
    let copy: IMemberBoxValue[] = [...props.state];
    copy[props.BeforeContainerIndex].member.splice(props.userIndex, 1);
    props.setState(copy);
  };

  useEffect(() => {
    if (containerIndex !== undefined) {
      ServerConnect(props.state[containerIndex].state);
      setContainerIndex(undefined);
    }
  }, [containerIndex]);

  const ServerConnect = async (state: string) => {
    const id: string = String(props.resumeId);
    try {
      const Token: string | null = localStorage.getItem("accessToken");
      if (!Token) return;
      const data = await API.post(
        `api/resume/admin/state`,
        {
          id: id,
          state: state,
        },
        {
          headers: { Authorization: `Bearer ${Token}` },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    console.log(props.name, id, state, props.userIndex);
  };

  const [{}, drag] = useDrag(() => ({
    type: "BOX",
    item: { name: props.name },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
    end: async (item, monitor) => {
      const a = monitor.getDropResult<IMonitorProps>();
      if (a !== null) {
        await ChangeValue({
          State: {
            stateValue: copyStateValue,
            setState: setCopyStateValue,
          },
          Dnd: {
            containerIndex: a.index,
            userIndex: props.userIndex,
            BeforeContainerIndex: props.BeforeContainerIndex,
          },
        });
        setContainerIndex(a.index);
        // console.log(props.resumeId, props.state[a.index].state, a.index);
      }
    },
  }));

  return (
    <S.MemberContainer ref={drag}>
      <S.MemberContents>
        <S.MemberDeleteButton
          src={TrashCanIcon}
          alt=""
          onClick={DeleteMember}
        />
        <S.MemberName
          onClick={() => {
            console.log(props.name, props.resumeId, props.userIndex);
          }}
        >
          {props.name}
        </S.MemberName>
        <S.MemberContentsContainer>
          학번 :<S.MemberEachContent>{props.schoolNumber}</S.MemberEachContent>
        </S.MemberContentsContainer>
        <S.MemberContentsContainer>
          연락처 :<S.MemberEachContent>{props.phoneNumber}</S.MemberEachContent>
        </S.MemberContentsContainer>
        <S.MemberContentsContainer>한줄 자기소개 :</S.MemberContentsContainer>
        <S.MemberEachContent>{props.introduce}</S.MemberEachContent>
        <S.DetailBtnWrap>
          <S.UserDetailBtn
            onClick={() => {
              if (props.portfolio === "" || props.portfolio == null) {
                alert("포트폴리오가 없습니다.");
                return;
              } else {
                window.open(props.portfolio);
              }
            }}
          >
            포트폴리오
          </S.UserDetailBtn>
          <S.UserDetailBtn
            onClick={() => {
              console.log(props.link.length);

              if (props.link.length <= 8 || props.link == null) {
                alert("포트폴리오 링크가 없습니다.");
                return;
              } else {
                window.open(props.link);
              }
            }}
          >
            포트폴리오 링크
          </S.UserDetailBtn>
        </S.DetailBtnWrap>
      </S.MemberContents>
    </S.MemberContainer>
  );
};

export default MemberContents;
