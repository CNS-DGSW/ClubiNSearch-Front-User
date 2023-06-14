import { Dispatch, SetStateAction } from "react";
import { IMemberValue, IServerMemberValue } from "./IMemberValue";

export interface IMemberBoxValue {
  title: string;
  member: IServerMemberValue[];
}

export interface IMemberBoxPropsValue {
  state: IMemberBoxValue[];
  setState: Dispatch<SetStateAction<IMemberBoxValue[]>>;
  title: string;
  Boxindex: number;
  member: IServerMemberValue[];
}
