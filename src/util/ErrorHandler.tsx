import React from "react";
interface IContentsValue {
  name: string;
  schoolNumber: string;
  phoneNumber: string;
  introduce: string;
  portfolio?: {
    name: string;
    url: string;
  } | null;
  link: string | null;
}
const ErrorHandler = (props: IContentsValue) => {
  if (
    props.name != null &&
    props.schoolNumber != null &&
    props.phoneNumber != null &&
    props.introduce != null
  ) {
    return true;
  } else {
    alert("필수 항목을 제대로 입력해주세요.");
    return false;
  }
};

export default ErrorHandler;
