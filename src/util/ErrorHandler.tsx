import React, { useState } from "react";
import { IContentsValue } from "@/types/IContentsValue";

interface IErrorValue {
  name: {
    context: string;
    isError: boolean;
  };
  schoolNumber: {
    context: string;
    isError: boolean;
  };
  phoneNumber: {
    context: string;
    isError: boolean;
  };
  introduce: {
    context: string;
    isError: boolean;
  };
  link: {
    context: string;
    isError: boolean;
  };
}

const ErrorHandler = (props: IContentsValue) => {
  const [errorValue, setErrorvalue] = useState<IErrorValue | null>(null);

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
