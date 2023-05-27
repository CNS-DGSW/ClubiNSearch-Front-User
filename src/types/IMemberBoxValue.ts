export interface IMemberBoxValue {
  title: string;
  index?: number;
  member?: IMemberValue[];
}
//타입 리팩토링 하기

export interface IMemberValue {
  name: string;
  schoolNumber: string;
  phoneNumber: string;
  introduce: string;
}
