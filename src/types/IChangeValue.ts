import { Dispatch, SetStateAction } from "react";
import { IMemberValue } from "@/types/IMemberBoxValue";

interface IMember {
  title: string;
  contents: IMemberValue[];
}

export interface IChangeValue {
  state: IMember[];
  setState: Dispatch<SetStateAction<IMember[]>>;
  containerIndex: number;
  userIndex: number;
  BeforeContainerIndex: number;
}
