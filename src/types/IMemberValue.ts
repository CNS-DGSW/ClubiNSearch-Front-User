import { Dispatch, SetStateAction } from "react";
import { IMemberBoxValue } from "./IMemberBoxValue";

export interface IMemberValue {
  name: string;
  schoolNumber: string;
  phoneNumber: string;
  introduce: string;
  portfolio?: string;
  link?: string;
}
export interface IMemberPropsValue {
  state: IMemberBoxValue[];
  setState: Dispatch<SetStateAction<IMemberBoxValue[]>>;
  userIndex: number;
  BeforeContainerIndex: number;
  name: string;
  schoolNumber: string;
  phoneNumber: string;
  introduce: string;
  portfolio?: string;
  link?: string;
}
