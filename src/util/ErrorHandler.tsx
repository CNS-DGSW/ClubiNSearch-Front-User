import React, { useState } from "react";
import { IContentsValue } from "@/types/IContentsValue";
import { IErrorValue } from "@/types/IErrorValue";

const ErrorHandler = (props: IContentsValue) => {
  const [errorValue, setErrorvalue] = useState<IErrorValue>({
    name: {
      context: "",
      isError: false,
    },
    schoolNumber: {
      context: "",
      isError: false,
    },
    phoneNumber: {
      context: "",
      isError: false,
    },
    introduce: {
      context: "",
      isError: false,
    },
    link: {
      context: "",
      isError: false,
    },
  });
  const regPhone = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;
  const regSchoolNumber = /[1-3][1-4][0-2][0-9]/;
  const regUrl =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;

  const ChangeErrorValue = (valueName: string) => {
    const CopyErrorValue: IErrorValue = { ...errorValue };
    if (valueName === "name") {
      CopyErrorValue.name.context = "필수 입력 항목 입니다.";
      CopyErrorValue.name.isError = true;
      setErrorvalue(CopyErrorValue);
    } else if (valueName === "schoolNumber") {
      CopyErrorValue.schoolNumber.context = "필수 입력 항목 입니다.";
      CopyErrorValue.schoolNumber.isError = true;
      setErrorvalue(CopyErrorValue);
    } else if (valueName === "phoneNumber") {
      CopyErrorValue.phoneNumber.context = "필수 입력 항목 입니다.";
      CopyErrorValue.phoneNumber.isError = true;
      setErrorvalue(CopyErrorValue);
    } else if (valueName === "introduce") {
      CopyErrorValue.introduce.context = "필수 입력 항목 입니다.";
      CopyErrorValue.introduce.isError = true;
      setErrorvalue(CopyErrorValue);
    } else if (valueName === "link") {
      CopyErrorValue.link.context = "정확한 링크를 입력해주세요.";
      CopyErrorValue.link.isError = true;
      setErrorvalue(CopyErrorValue);
    }
  };

  if (props.name === "" || props.name.length < 2) {
    ChangeErrorValue("name");
  }
  if (props.introduce === "" || props.introduce.length < 2) {
    ChangeErrorValue("introduce");
  }
  if (!regPhone.test(props.phoneNumber)) {
    ChangeErrorValue("phoneNumber");
  }
  if (!regSchoolNumber.test(props.schoolNumber)) {
    ChangeErrorValue("schoolNumber");
  }
  if (props.link) {
    if (!regUrl.test(props.link)) {
      ChangeErrorValue("link");
    }
  }

  return errorValue;
};

export default ErrorHandler;
