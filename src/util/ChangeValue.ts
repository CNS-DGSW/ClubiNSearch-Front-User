import React, { SetStateAction, Dispatch } from "react";
import { IMemberBoxValue } from "@/types/IMemberBoxValue";
import API from "./api";

interface IChangeValue {
  State: {
    stateValue: IMemberBoxValue[];
    setState: Dispatch<SetStateAction<IMemberBoxValue[]>>;
  };
  Dnd?: {
    containerIndex: number;
    userIndex: number;
    BeforeContainerIndex: number;
    resumeId: string;
    state: string;
  };
  Delete?: {
    Containerindex: number;
  };
}

const ServerConnect = async (id: string, state: string) => {
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
  console.log(state, id);
};

const DeleteValue = ({
  copy,
  props,
}: {
  copy: IMemberBoxValue[];
  props: IChangeValue;
}) => {
  if (!props.Dnd) return;
  copy[props.Dnd.BeforeContainerIndex].member.splice(props.Dnd.userIndex, 1);
};

const AddValue = ({
  copy,
  props,
}: {
  copy: IMemberBoxValue[];
  props: IChangeValue;
}) => {
  if (!props.Dnd) return;
  console.log(
    props.State.stateValue[props.Dnd.BeforeContainerIndex].member[
      props.Dnd.userIndex
    ]
  );
  copy[props.Dnd.containerIndex].member.push(
    props.State.stateValue[props.Dnd.BeforeContainerIndex].member[
      props.Dnd.userIndex
    ]
  );
};

const DeleteMemberContainer = ({
  copy,
  props,
}: {
  copy: IMemberBoxValue[];
  props: IChangeValue;
}) => {
  if (!props.Delete) return;
  if (
    !window.confirm(
      props.State.stateValue[props.Delete.Containerindex].state +
        "을(를) 삭제하시겠습니까?"
    )
  )
    return;
  if (props.State.stateValue[props.Delete.Containerindex].member[0]) {
    alert("남은 지원자를 이동시킨뒤 삭제해주세요.");
    return;
  }
  copy.splice(props.Delete.Containerindex, 1);
  props.State.setState(copy);
};

const ChangeValue = (props: IChangeValue) => {
  let copy: IMemberBoxValue[] = [...props.State.stateValue];

  if (props.Dnd) {
    const state: string =
      props.State.stateValue[props.Dnd.containerIndex].state;
    const resumeId: string = String(
      props.State.stateValue[props.Dnd.BeforeContainerIndex].member[
        props.Dnd.userIndex
      ].resumeId
    );
    ServerConnect(resumeId, state);
    AddValue({ copy, props });
    DeleteValue({ copy, props });
  } else if (props.Delete) {
    DeleteMemberContainer({ copy, props });
  }
  props.State.setState([...copy]);
};

export default ChangeValue;
