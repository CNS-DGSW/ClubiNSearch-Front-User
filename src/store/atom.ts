import { atom } from "recoil";

export const isOverDate = atom<boolean>({
  key: "isOverDate",
  default: false,
});
