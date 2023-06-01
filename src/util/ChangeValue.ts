import React, { SetStateAction, Dispatch } from "react";
import { IMemberBoxValue } from "@/types/IMemberBoxValue";

interface IChangeValue {
  State: {
    stateValue: IMemberBoxValue[];
    setState: Dispatch<SetStateAction<IMemberBoxValue[]>>;
  };
  Dnd?: {
    containerIndex: number;
    userIndex: number;
    BeforeContainerIndex: number;
  };
  Delete?: {
    Containerindex: number;
  };
}

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
      props.State.stateValue[props.Delete.Containerindex].title +
        "을(를) 삭제하시겠습니까?"
    )
  )
    return;
  if (props.State.stateValue[props.Delete.Containerindex].member[0]) {
    alert("남은 지원자를 이동시키거나 삭제해주세요.");
    return;
  }
  copy.splice(props.Delete.Containerindex, 1);
  console.log("cp : ", copy);
  props.State.setState(copy);
};

const ChangeValue = (props: IChangeValue) => {
  let copy: IMemberBoxValue[] = [...props.State.stateValue];
  if (props.Dnd) {
    AddValue({ copy, props });
    DeleteValue({ copy, props });
  } else if (props.Delete) {
    DeleteMemberContainer({ copy, props });
  }
  props.State.setState(copy);
};

export default ChangeValue;
