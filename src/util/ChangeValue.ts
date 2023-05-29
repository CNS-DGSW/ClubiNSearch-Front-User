import React, { SetStateAction, Dispatch } from "react";
import { IMemberBoxValue } from "@/types/IMemberBoxValue";

interface IChangeValue {
  state: IMemberBoxValue[];
  setState: Dispatch<SetStateAction<IMemberBoxValue[]>>;
  containerIndex: number;
  userIndex: number;
  BeforeContainerIndex: number;
}

const DeleteValue = ({
  copy,
  props,
}: {
  copy: IMemberBoxValue[];
  props: IChangeValue;
}) => {
  copy[props.BeforeContainerIndex].member.splice(props.userIndex, 1);
};
const AddValue = ({
  copy,
  props,
}: {
  copy: IMemberBoxValue[];
  props: IChangeValue;
}) => {
  copy[props.containerIndex].member.push(
    props.state[props.BeforeContainerIndex].member[props.userIndex]
  );
};

const ChangeValue = (props: IChangeValue) => {
  let copy: IMemberBoxValue[] = [...props.state];
  AddValue({ copy, props });
  DeleteValue({ copy, props });
  props.setState(copy);
};

export default ChangeValue;
