import { Dispatch, SetStateAction } from "react";
import { IMemberValue } from "./IMemberValue";
export interface IMemberBoxValue {
  title: string;
  member: IMemberValue[];
}

export interface IMemberBoxPropsValue {
  state: IMemberBoxValue[];
  setState: Dispatch<SetStateAction<IMemberBoxValue[]>>;
  title: string;
  Boxindex: number;
  member?: IMemberValue[];
}
