import { Dispatch, SetStateAction } from "react";
import { IMemberBoxValue } from "./IMemberBoxValue";

export interface IMemberPropsValue {
  state: IMemberBoxValue[];
  setState: Dispatch<SetStateAction<IMemberBoxValue[]>>;
  userIndex: number;
  BeforeContainerIndex: number;
  name: string;
  schoolNumber: string;
  phoneNumber: string;
  introduce: string;
  portfolio: string;
  link: string;
  resumeId: number;
}

export interface IServerMemberValue {
  id: number;
  name: string;
  studentNo: string;
  contact: string;
  introduction: string;
  link: string;
  fileUrl: string;
  resumeId: number;
}
//state: "SUBMIT";

export interface IServerMemberPropsValue {
  state: IMemberBoxValue[];
  setState: Dispatch<SetStateAction<IMemberBoxValue[]>>;
  userIndex: number;
  BeforeContainerIndex: number;
  id: number;
  name: string;
  studentNo: string;
  contact: string;
  introduction: string;
  link: string;
  fileUrl: string;
}
